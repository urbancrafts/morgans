<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Auth\AuthenticationException;
use Validator;

class CandidateAuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
     protected $user;
    public function __construct()
    {
        
    }

    public function index()
    {
        //
        return view('candidate_auth.login_2');
    }

    public function register_form(){
        return view('candidate_auth.register'); 
    }


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|max:255|unique:candidates',
            'phone' => 'required',
            'password' => 'required|string|min:6|confirmed',
            
        ]);   

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 422);
        }
        $input['name'] = $request['name'];
        $input['email'] = $request['email'];
        $input['phone'] = $request['phone'];
        $input['password'] = bcrypt($request['password']);
        $create_user = Candidate::create($input);

        return response_data(true, 200, "Account created successfully", ['values' => $create_user], false, false);
        // return response()->json($this->result, 200);

}


    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 422);
        }
        //Request is validated
       
        try {
            if (!$auth = Auth::guard('candidate')->attempt($credentials)) {
                return response_data(false, 422, "User credentials are invalid.", false, false, false);
            }
        } catch (AuthenticationException $e) {
            // return $credentials;
            return response_data(false, 422, "Could not create authentication.", false, false, false);
        }
 
        $this->user = Auth::guard('candidate')->user();


        
        setcookie("user_id", $this->user->id, strtotime( '+30 days' ), "/", "", "", TRUE);
        setcookie("name", $this->user->name, strtotime( '+30 days' ), "/", "", "", TRUE);
        setcookie("phone", $this->user->phone, strtotime( '+30 days' ), "/", "", "", TRUE);
        setcookie("email", $this->user->email, strtotime( '+30 days' ), "/", "", "", TRUE);
        

        //DeviceLoginController::check_device_loggedin($this->user->email, 'login');

        return response_data(true, 200, "Login successful", ['values' => $this->user], false, false);
    }

    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
