<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuickTrackDashboard extends Controller
{
    public function FetchAppData(Request $request)
    {
        $data['data'] = $request->data;
        $data['appName'] = $request->appName;
        
        return response()->json($data);
    }

    public function Marketing()
    {
        $data['data'] = 'Marketing';
        
        return response()->json($data);
    }

    public function Report(Request $request)
    {
        $data['appName'] = $request->appName;
        
        return response()->json($data);
    }
    
}
