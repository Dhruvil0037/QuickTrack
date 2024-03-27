<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class QuickTrackDashboard extends Controller
{
    protected $userCollection;

    public function __construct()
    {
        
        $users = DB::table('users')->selectRaw('*, DATE_FORMAT(created_at, "%d-%m-%Y") as formatted_created_at')->orderBy('created_at', 'desc')->get();
        $this->userCollection = collect($users);
    }

    public function FetchAppData(Request $request)
    {
        $data['data'] = $request->data;
        $data['appName'] = $request->appName;

        $parts = explode('-', $data['data'], 2);
        
        if (isset($parts[0]) && isset($parts[1])) {
            $data['merchantData'] = DB::table('user_additional_datas')->where('store_url', $parts[1])->first();
            // $data['merchantData'] = DB::table('user_additional_datas')->where('store_url', 'quickstart-e69a1402.myshopify.com')->first();

            $data['merchantUserData'] = [];

            if(isset($data['merchantData'])){
                $data['merchantUserData'] = DB::table('product_reviews')->where('user_id', $data['merchantData']->user_id)->get();
            }
            //dd($data['userData']);
            
        } else {
            switch ($data['data']) {
                case 'AllData':
                    // May be store_is_inactive can change to 1
                    $data['activeMerchantCounts'] = $this->userCollection->where('store_is_inactive', 0)->count();

                    $data['allReviewCounts'] = DB::table('product_reviews')->count();

                    $data['freeMerchantCounts'] = $this->userCollection->count();

                    $data['paidMerchantCounts'] = $this->userCollection->count();

                    $data['topTenActiveMerchants'] = $this->userCollection->where('store_is_inactive', 0);

                    $data['topTenLoginMerchants'] = $this->userCollection->where('store_is_inactive', 0);
                    break;
                case 'ActiveMerchantList':
                    $data['activeMerchants'] = $this->userCollection->where('store_is_inactive', 0);
                    break;
                case 'AllMerchantList':
                    $data['allMerchants'] = $this->userCollection;
                    break;
                case 'FreeMerchantList':
                    $data['freeMerchants'] = $this->userCollection;
                    break;
                case 'PaidMerchantList':
                    $data['paidMerchants'] = $this->userCollection;
                    break;
                default:
                    // default case
                    break;
                    
            }
        }
        
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
