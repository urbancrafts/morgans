<?php

namespace App\Observers;

use App\Models\Recruiter;

class RecruiterObserver
{
    /**
     * Handle the Recruiter "created" event.
     *
     * @param  \App\Models\Recruiter  $recruiter
     * @return void
     */
    public function created(Recruiter $recruiter)
    {
        //
    }

    /**
     * Handle the Recruiter "updated" event.
     *
     * @param  \App\Models\Recruiter  $recruiter
     * @return void
     */
    public function updated(Recruiter $recruiter)
    {
        //
    }

    /**
     * Handle the Recruiter "deleted" event.
     *
     * @param  \App\Models\Recruiter  $recruiter
     * @return void
     */
    public function deleted(Recruiter $recruiter)
    {
        //
    }

    /**
     * Handle the Recruiter "restored" event.
     *
     * @param  \App\Models\Recruiter  $recruiter
     * @return void
     */
    public function restored(Recruiter $recruiter)
    {
        //
    }

    /**
     * Handle the Recruiter "force deleted" event.
     *
     * @param  \App\Models\Recruiter  $recruiter
     * @return void
     */
    public function forceDeleted(Recruiter $recruiter)
    {
        //
    }
}
