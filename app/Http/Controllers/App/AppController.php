<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Repositories\AccountRepository;
use App\Repositories\AddRepository;
use App\Repositories\DelAccountRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class AppController extends BaseController
{
   public function init(Request $request)
   {
       try {
           $accRep = new AccountRepository();
           $delAccRep = new DelAccountRepository();
           $userRep = new UserRepository();

           $userId = $userRep->getIdByToken($request->token);

           $accounts = $accRep->getAllAccounts($userId);
           $delAccounts = $delAccRep->getAllAccounts($userId);
           $entrances = AddRepository::getEntrances($userId);
           $restores = AddRepository::getRestores($userId);

            return response()->json([
                'accounts' => $accounts,
                'delAccounts' => $delAccounts,
                'entrances' => $entrances,
                'restores' => $restores,
            ]);
       } catch (\Exception $e) {
           return response()->json(['Error: ' => $e->getMessage()]);
       }

   }
}
