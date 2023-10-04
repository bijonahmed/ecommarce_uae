<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CandidateSendingMail extends Mailable
{
    use Queueable, SerializesModels;
    public $details;
    public function __construct($details)
    {
        $this->details = $details;
    }
    public function build()
    {
        $address      = $this->details['candidate_cc'];
        $name         = $this->details['candidate_name'];
        $cname        = $this->details['candidate_name'];
        $subject      = $this->details['subject'];
        $file         =  $this->details['file'];
        $emailData =  $this->subject($subject)
            ->view('emails.candidateMail');
        //->cc($address, $name)
        if ($file) { // Replace 'attachFile' with your condition
            $emailData->attach(public_path($file)); // Replace with the actual path
        }

        if ($file) { // Replace 'attachFile' with your condition
            $emailData->cc($address, $name); // Replace with the actual path
        }
        // ->attach($file); // Replace with the actual path to your file;
        return $emailData;
    }
}
