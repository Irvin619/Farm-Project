<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Roles;

class RolesController extends Controller
{
    public function index() {
        $roles = Roles::all();
        return response()->json($roles);
    }
}
