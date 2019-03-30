<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;

class CustomerCntroller extends Controller
{
    public function all(){
        $customers = Customer::all();
        return response()->json([
            'customers' => $customers
        ],200);
    }
}
