<?php

namespace App\Services\Side\Mesh;
use Exception;
use App\Services\SendService;

/**
 * @author miha1337
 */
class Requests
{
    protected $ch;
    public array $headers = array();
    public array $cookies = array();
    protected string $proxy;
    protected string $proxyauth;
    protected string $proxytype;
    function __construct()
    {
        //$this->ch = curl_init();
    }
    function updateHeaders($headers)
    {
    	foreach ($headers as $key => $value) {
    		$this->headers[$key] = $value;
    	}
    }
    function updateCookies($cookies)
    {
        foreach ($cookies as $key => $value) {
    		$this->cookies[$key] = $value;
    	}
    }
    function setProxy($proxy = null){
        $this->proxy = $proxy;
    }
    function setProxyAuth($proxy = null){
        $this->proxyauth = $proxy;
    }
    function setProxyType($proxy = null){
        $this->proxytype = $proxy;
    }
    function obr($name, $array){
    	$array2 = array();
    	foreach ($this->{$name} as $key => $value) {
    		$array2[$key] = $value;
    	}
    	foreach ($array as $key => $value) {
    		$array2[$key] = $value;
    	}
    	return $array2;
    }
    function obs($array){
    	foreach ($array as $key => $value) {
    		$name_cookie = explode("=", $value)[0];
    		parse_str(strtr($value, array('&' => '%26', '+' => '%2B', ';' => '&')), $value);
    		//$value['Domain'];
    		//$value['Expires'];
    		//$value['Path'];
    		$value_cookie = $value[$name_cookie];
    		if (empty($value_cookie)){
    			continue;
    		}
    		$this->cookies[$name_cookie] = $value_cookie;
    	}
    	return $this->cookies;
    }
    function cookie_to_string($cookies){
    	$cookie = array();
		foreach( $cookies as $key => $value ) {
		  $cookie[] = "{$key}={$value}";
		}
		$cookie = implode('; ', $cookie);
		return $cookie;
    }
    function headers_to($array){
    	$array2 = array();
    	foreach ($array as $key => $value) {
    		$array2[] = $key.": ".$value;
    	}
    	return $array2;
    }
    function get($url, $params=array(), $headers=array(), $cookies=array(), $allow_redirect=true){
   		return $this->request("GET", $url, $params, $headers, $cookies, $allow_redirect);
    }
    function post($url, $params=array(), $headers=array(), $cookies=array(), $allow_redirect=true, $json=false){
   		return $this->request("POST", $url, $params, $headers, $cookies, $allow_redirect, $json);
    }
    function request($method, $url, $params=array(), $headers=array(), $cookies=array(), $allow_redirect=true, $json=false){
    	$this->ch = curl_init();
    	$params2 = "";
    	if ($method == "GET"){
    		if ($params != array()){
	   			$params2 = '?'.http_build_query($params);
	   		}
    	}elseif($method == "POST"){
    		curl_setopt($this->ch, CURLOPT_POST, 1);
    		if ($json == true){
    			curl_setopt($this->ch, CURLOPT_POSTFIELDS, $params);
    		}elseif ($params != array()){
    			curl_setopt($this->ch, CURLOPT_POSTFIELDS, http_build_query($params));
    		}
    	}
    	curl_setopt($this->ch, CURLOPT_URL, $url.$params2);
        //curl_setopt($this->ch, CURLOPT_FOLLOWLOCATION, $allow_redirect);
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
        if ($this->proxytype ?? null == 'socks5') {
            curl_setopt($this->ch, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);
        }
        curl_setopt($this->ch, CURLOPT_PROXY, $this->proxy ?? null);
        curl_setopt($this->ch, CURLOPT_PROXYUSERPWD, $this->proxyauth ?? null);
        curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, 0);
        $headers = $this->obr("headers", $headers);
        curl_setopt($this->ch, CURLOPT_HTTPHEADER, $this->headers_to($headers));
        //SendService::debug_send($this->cookie_to_string($cookies));
        $cookies = $this->obr("cookies", $cookies);
        curl_setopt($this->ch, CURLOPT_COOKIE, $this->cookie_to_string($cookies));
        $headers2 = [];
        curl_setopt($this->ch, CURLOPT_HEADERFUNCTION,
		  function($curl, $header) use (&$headers2)
		  {
		    $len = strlen($header);
		    $header = explode(':', $header, 2);
		    if (count($header) < 2)
		      return $len;

		    $headers2[strtolower(trim($header[0]))][] = trim($header[1]);

		    return $len;
		  }
		);
        $response = curl_exec($this->ch);
        $text = $response;
        //lad($url, $text);
        try {
            $set_cookie = $headers2['set-cookie'];
        } catch (Exception $e) {
            $set_cookie = [];
        }
        $this->obs($set_cookie);
        $code = curl_getinfo($this->ch, CURLINFO_HTTP_CODE);
        if ($allow_redirect == true){
        	if (!empty($headers2['location'][0])){
        	    $location = parse_url($url)['scheme'].'://'.parse_url($url)['host'].$headers2['location'][0];
        	    if (substr($headers2['location'][0], 0, 4) == 'http') {
        	        $location = $headers2['location'][0];
                }
        		$new_url = $location;
				$response = $this->request($method, $new_url, array(), $headers, $cookies, $allow_redirect);
				$code = $response->code;
				$text = $response->text;
				$headers2 = $response->headers;
				$cookies = $response->cookies;
			}
        }
        return new Response($code, $text, $headers2, $set_cookie);
    }
}
/**
 *
 */
class Response
{
	public $code;
	public $text;
	public $headers;
	public $cookies;
	function __construct($code, $text, $headers, $cookies)
	{
		$this->code = $code;
		$this->text = $text;
		$this->headers = $headers;
		$this->cookies = $cookies;
	}
	function json(){
		return json_decode($this->text);
	}

    function get_location()
    {
        $location_titles = ["Location", "location"];
        foreach (($this->headers ?? []) as $header => $value) {
            foreach ($location_titles as $location_title) {
                if ($location_title == $header) {
                    return $value[0];
                }
            }
        }
        return null;
    }
}
