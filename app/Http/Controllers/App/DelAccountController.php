<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Repositories\AccountRepository;
use App\Repositories\DelAccountRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class DelAccountController extends BaseController
{
    /**
     * @var DelAccountRepository
     */
    public $accountRepository;
    /**
     * @var UserRepository
     */
    public $userRepository;

    public function __construct()
    {
        $this->accountRepository = app(DelAccountRepository::class);
        $this->userRepository = app(UserRepository::class);
    }

    /**
     * Display a list of users accounts.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $accounts = $this->accountRepository->getAllAccounts($userId);
            return response()->json($accounts->toArray());
        } catch (\Exception $e) {
            return response()->json(['Error: ' => $e->getMessage()]);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function restore(Request $request,$account)
    {
        try {
            $accRep = new AccountRepository();

            $userId = $this->userRepository->getIdByToken($request->token);
            $delAccount = $this->accountRepository->getForDelete($account, $userId);

            $remove = $accRep->setToAccount($delAccount);
            if($remove) $delAccount->delete();

            return response()->json(['id' => $delAccount->id]);
        } catch (\Exception $e) {
            return ['Error' => $e->getMessage()];
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param \http\Env\Request $request
     * @return
     */
    public function destroy(Request $request, $account)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $account = $this->accountRepository->getForDelete($account, $userId);
            $account = $account->delete();

            return response()->json(['delete' => $account]);
        } catch (\Exception $e) {
            return response()->json(['Error: ' => $e->getMessage()]);
        }
    }
}
