<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Repositories\AccountRepository;
use App\Repositories\DelAccountRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class AccountController extends BaseController
{
    /**
     * @var AccountRepository
     */
    public $accountRepository;
    /**
     * @var UserRepository
     */
    public $userRepository;

    public function __construct()
    {
        $this->accountRepository = app(AccountRepository::class);
        $this->userRepository = app(UserRepository::class);
    }


    /**
     * Display a list of users accounts.
     *
     * @return\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $accounts = $this->accountRepository->getAllAccounts($userId);
            return response()->json($accounts->toArray(),200);
        } catch (\Exception $e) {
            return response()->json([],404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     *
     * @return\Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $result = $this->accountRepository->updateAccount($request->all(),$userId, $id);
            return response()->json(['update' => $result], 200);
        } catch (\Exception $e) {
            return response()->json(['Error' => $e->getMessage()],400);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param\Illuminate\Http\Request $request
     *
     * @return\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $account = $this->accountRepository->createAccount($request->all(), $userId);
            return response()->json(['id' => $account->id],200);
        } catch (\Exception $e) {
            return response()->json(['Error' => $e->getMessage()],400);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param \http\Env\Request $request
     * @return
     */
    public function destroy(Request $request, $id)
    {
        try {
            $delAccRep = new DelAccountRepository();

            $userId = $this->userRepository->getIdByToken($request->token);
            $account = $this->accountRepository->getForUpdate($id, $userId);

            $remove = $delAccRep->setDelAccount($account);
            if ($remove) $account = $account->delete();

            return response()->json(['delete' => true],200);
        } catch (\Exception $e) {
            return response()->json(['Error: ' => $e->getMessage()],400);
        }
    }

}
