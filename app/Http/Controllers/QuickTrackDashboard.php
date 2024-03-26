<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuickTrackDashboard extends Controller
{
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
                    $data['activeMerchantCounts'] = DB::table('users')->where('store_is_inactive', 0)->count();

                    $data['allReviewCounts'] = DB::table('product_reviews')->count();

                    $data['freeMerchantCounts'] = DB::table('users')->count();

                    $data['paidMerchantCounts'] = DB::table('users')->count();

                    $data['topTenActiveMerchants'] = DB::table('users')
                                ->selectRaw('users.*, user_additional_datas.store_email, DATE_FORMAT(users.created_at, "%Y-%m-%d") as formatted_created_at, 
                                            (SELECT COUNT(*) FROM product_reviews WHERE product_reviews.user_id = user_additional_datas.user_id) AS total_submission_row')
                                ->leftJoin('user_additional_datas', 'users.id', '=', 'user_additional_datas.user_id')
                                ->where('users.store_is_inactive', 0)
                                ->orderBy('users.created_at', 'desc')
                                ->limit(10)
                                ->get();

                
                    $data['topTenLogin'] = DB::table('users')
                                ->selectRaw('*, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_created_at')
                                ->where('store_is_inactive', 0)
                                ->orderBy('created_at', 'desc')
                                ->get();
                    break;
                case 'ActiveMerchantList':
                    $data['activeMerchants'] = DB::table('users')
                                ->selectRaw('*, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_created_at')
                                ->where('store_is_inactive', 0)
                                ->orderBy('created_at', 'desc')->get();
                    break;
                case 'AllMerchantList':
                    $data['allMerchants'] = DB::table('users')
                                ->selectRaw('*, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_created_at')
                                ->orderBy('created_at', 'desc')->get();
                    break;
                case 'FreeMerchantList':
                    $data['freeMerchants'] = DB::table('users')
                                ->selectRaw('*, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_created_at')
                                ->orderBy('created_at', 'desc')->get();
                    break;
                case 'PaidMerchantList':
                    $data['paidMerchants'] = DB::table('users')
                                ->selectRaw('*, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_created_at')
                                ->orderBy('created_at', 'desc')->get();
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