<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

if (!function_exists('response_data')) {
    function response_data($status = false, $status_code = false, $message = false, $data = false, $token = false, $debug = false)
    {
        return response()->json(array(
            'status' => $status ? $status : false,
            'status_code' => $status_code ? $status_code : 200,
            'message' => $message ? $message : null,
            'data' =>  $data ? (object) [
                'errors' => isset($data['errors']) ? $data['errors'] : null,
                'values' => isset($data['values']) ? $data['values'] : null,
            ] : [],
            'token' => $token ? $token : null,
            'debug' => $debug ? $debug : null
        ), $status_code ? $status_code : 200);
        
    }
}