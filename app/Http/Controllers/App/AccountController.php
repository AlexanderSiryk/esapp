<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\BaseController;
use App\Repositories\AccountRepository;
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
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $accounts = $this->accountRepository->getAllAccounts($userId);
            return response()->json($accounts->toArray());
        } catch (\Exception $e) {
            return response()->json([]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return
     */
    public function update(Request $request, $id)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $result = $this->accountRepository->updateAccount($request->all(),$userId, $id);

            $result = $account
                ->fill($data)
                ->save();
            return ['update' => $result];
        } catch (\Exception $e) {
            return ['Error' => $e->getMessage()];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */


    public function store(Request $request)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $account = $this->accountRepository->createAccount($request->all(), $userId);
            return response()->json(['id' => $account->id]);
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
    public function destroy(Request $request, $id)
    {
        try {
            $userId = $this->userRepository->getIdByToken($request->token);
            $account = $this->accountRepository->getForUpdate($id, $userId);
            $account = $account->delete();

            return response()->json(['delete' => $account]);
        } catch (\Exception $e) {
            return response()->json(['Error: ' => $e->getMessage()]);
        }
    }
}
