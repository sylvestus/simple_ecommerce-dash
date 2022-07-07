<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $req){
        $user = new User();
        $user->username = $req->input('username');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
       
        return $user;
    }

    function logIn(Request $req){
        $username=User::where('email',$req->email)->first();
        if(!$username || Hash::check($req->password,$username->password)){
             return ['error'=>'Email or password is not matched'];
        }

       return $username;
    }
    
    
}
