<?php

namespace App\Policies;

use App\Models\Recruiter;
//use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RecruiterPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Recruiter  $recruiter
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Recruiter $model)
    {
        //

         // Check if the user is authenticated using the 'web' guard
         if ($user->guard === 'recruiter') {
            return $user->id === $model->id;
        }

        return false; //Deny access by default
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Recruiter  $recruiter
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Recruiter $recruiter)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Recruiter  $recruiter
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Recruiter $recruiter)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Recruiter  $recruiter
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Recruiter $recruiter)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Recruiter  $recruiter
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Recruiter $recruiter)
    {
        //
    }
}
