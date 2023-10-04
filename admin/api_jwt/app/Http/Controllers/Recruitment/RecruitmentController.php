<?php
namespace App\Http\Controllers\Recruitment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Circumstances;
use App\Models\Recruitment;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
use File;
use PhpParser\Node\Stmt\TryCatch;
use function Ramsey\Uuid\v1;
class RecruitmentController extends Controller
{
    protected $frontend_url;
    protected $userid;
    public function __construct(Request $request)
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
    public function editId($id)
    {
        $id = (int) $id;
        $data = Recruitment::editId($id);
        $response = [
            'data' => $data,
            'dataImg' => !empty($data->doc) ? url($data->doc) : "",
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkjobpostRow($id)
    {
        $id = (int) $id;
        $data = Recruitment::jobpostRow($id);
        //  dd($data);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkPublishRow($id)
    {
        $id = (int) $id;
        $data = Recruitment::jobpostpublishRow($id);
        $response = [
            'data' => $data,
            'file_1' => !empty($data->file_1) ? url($data->file_1) : "",
            'file_2' => !empty($data->file_2) ? url($data->file_2) : "",
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkapplyjobrow($id)
    {
        $id = (int) $id;
        $data = Recruitment::jobApplyRow($id);
        $response = [
            'data'    => $data,
            'files'   => !empty($data->files) ? url($data->files) : "",
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }


public function checkgeneOfferLetterRow($id)
    {
        $id = (int) $id;
        $data = Recruitment::generateOfferLettrow($id);
        $response = [
            'data'    => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    
    public function getAllJoblist(Request $request)
    {
        try {
            $rows = Recruitment::filterJobList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getjobStatus(Request $request)
    {
        try {
            $rows = Recruitment::filterJoStatusbList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getAllemailSending(Request $request)
    {
        try {
            $rows = Recruitment::filterEmailSending($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getallAppliedJob(Request $request)
    {
        try {
            $rows = Recruitment::filterAppliedJob($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }



 public function offerletterlist(Request $request)
    {
        try {
            $rows = Recruitment::filterofferletter($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }









    
    public function getallShortListedJob(Request $request)
    {
        try {
            $rows = Recruitment::filterShortListedJob($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getallInterviewListedJob(Request $request)
    {
        try {
            $rows = Recruitment::filterInvertiewList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getallHiredList(Request $request)
    {
        try {
            $rows = Recruitment::filterHiredList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getRejectList(Request $request)
    {
        try {
            $rows = Recruitment::filterrejectList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getAllJobPublish(Request $request)
    {
        try {
            $rows = Recruitment::filterJobPublish($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getAllJobPost(Request $request)
    {
        try {
            $rows = Recruitment::getAllJobPosts($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function updateAppliedJob(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status'        => 'required',
        ]);
        $data = array(
            'remarks'          => !empty($request->remarks) ? $request->remarks : "",
            'status'           => !empty($request->status) ? $request->status : "",
            'entry_by'         => $this->userid,
        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        DB::table('apply_job')->where('id', $request->id)->update($data);
        $response = [
            'message' => 'Successfully:' . $request->id
        ];
        return response()->json($response);
    }
    public function saveJoblist(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'job_type_code'        => 'required',
            'job_title'            => 'required',
            'department'           => 'required',
            'job_description'      => 'required',
            'soc_code'             => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'job_type_code'    => !empty($request->job_type_code) ? $request->job_type_code : "",
            'job_title'        => !empty($request->job_title) ? $request->job_title : "",
            'department'       => !empty($request->department) ? $request->department : "",
            'job_description'  => !empty($request->job_description) ? $request->job_description : "",
            'soc_code'         => !empty($request->soc_code) ? $request->soc_code : "",
            'entry_by'         => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            $id = DB::table('joblist')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('joblist')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully:' . $id
        ];
        return response()->json($response);
    }

    public function getreportRecuitment(Request $request){
             
        
       // dd($rows);
        try {
            $rows = Recruitment::geReport($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);

    }
    //Job Posting saveJobPosting
    public function saveJobPosting(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'soc_code'             => 'required',
            'job_title'            => 'required',
            'department'           => 'required',
            'job_description'      => 'required',
            'job_code'             => 'required',
            'employee_type'        => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'soc_code'              => !empty($request->soc_code) ? $request->soc_code : "",
            'job_title'             => !empty($request->job_title) ? $request->job_title : "",
            'department'            => !empty($request->department) ? $request->department : "",
            'job_code'              => !empty($request->job_code) ? $request->job_code : "",
            'job_description'       => !empty($request->job_description) ? $request->job_description : "",
            'employee_type'         => !empty($request->employee_type) ? $request->employee_type : "",
            'working_hour'          => !empty($request->working_hour) ? $request->working_hour : "",
            'job_exp_min'           => !empty($request->job_exp_min) ? $request->job_exp_min : "",
            'job_exp_max'           => !empty($request->job_exp_max) ? $request->job_exp_max : "",
            'basic_salary_min'      => !empty($request->basic_salary_min) ? $request->basic_salary_min : "",
            'basic_salary_max'      => !empty($request->basic_salary_max) ? $request->basic_salary_max : "",
            'peroid'                => !empty($request->peroid) ? $request->peroid : "",
            'number_of_vacanci'     => !empty($request->number_of_vacanci) ? $request->number_of_vacanci : "",
            'job_location'          => !empty($request->job_location) ? $request->job_location : "",
            'qualification'         => !empty($request->qualification) ? $request->qualification : "",
            'skill_set'             => !empty($request->skill_set) ? $request->skill_set : "",
            'age_min'               => !empty($request->age_min) ? $request->age_min : "",
            'age_max'               => !empty($request->age_max) ? $request->age_max : "",
            'gender'                => !empty($request->gender) ? $request->gender : "",
            'job_post_date'         => !empty($request->job_post_date) ? $request->job_post_date : "",
            'job_close_date'        => !empty($request->job_close_date) ? $request->job_close_date : "",
            'authrosi_officer'      => !empty($request->authrosi_officer) ? $request->authrosi_officer : "",
            'authrosi_officer_desg' => !empty($request->authrosi_officer_desg) ? $request->authrosi_officer_desg : "",
            'contact_numb'          => !empty($request->contact_numb) ? $request->contact_numb : "",
            'email'                 => !empty($request->email) ? $request->email : "",
            'role'                  => !empty($request->role) ? $request->role : "",
            'lan_requirment'        => !empty($request->lan_requirment) ? $request->lan_requirment : "",
            'entry_by'              => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            $id = DB::table('jobpost')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('jobpost')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully:' . $id
        ];
        return response()->json($response);
    }

    public function generatedOfferLetter(Request $request){

        $validator = Validator::make($request->all(), [
            'candidate_name' => 'required',
            'payment_type'   => 'required',
            'offerd_salary'  => 'required',
            'dateofjoining'  => 'required',
           // 'body'           => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $arr['candidate_name'] = $request->candidate_name;
        $arr['payment_type'] = $request->payment_type;
        $arr['offerd_salary'] = $request->offerd_salary;
        $arr['dateofjoining'] = date("Y-m-d",strtotime($request->dateofjoining));
        $arr['currentDate'] = date("Y-m-d");

        $body="";
        $body.= Helper::sprint("
        {candidate_name}
        Greater London,England,London,United Kingdom ,SE18 4AT
        {currentDate}
        Transcend Global Ltd
        Unit 5, Plumstead Business Centre,44 Plumstead High Street,London,SE18 1SL,United Kingdom
        Dear MD {candidate_name},
        Following your recent interview, I am writing to offer you the post of MARKETING DIRECTOR at the salary of {offerd_salary} per {payment_type},
        starting on {dateofjoining}.
        Full details of the post’s terms and conditions of employment are in your attached Employment Contract.
        As explained during the interview, this job offer is made subject to satisfactory results from necessary pre-employment checks.
        There will also be a probationary period of three months which will have to be completed satisfactorily.
        This is a Full Time .On starting, you will report to {candidate_name}.
        If you have any queries on the contents of this letter, the attached Employment Contractor the pre-employment checks,
        please do not hesitate to contact me on 007957165444.
        To accept this offer, please sign and date the attached copy of this letter in the spaces indicated,
        scan it in legible format and send it back to us by replying to rashed@transcendglobal.co.uk.
        We are delighted to offer you this opportunity and look forward to you joining the organisation and working with you.
        This letter is part of your contract of employment.
        Yours sincerely,
        {candidate_name}
        MARKETING DIRECTOR
        I am very pleased to accept the job offer on the terms and conditions detailed in this letter and the Written
        Statement of Terms and Conditions of Employment
        Signed and date ………………………………………………………………………………………………
        [Successful candidate to write their signature with date]
        Name ……………………………………………………………………………………………………………….
        [Successful candidate to print their full name in capital letters]",$arr);



       $data = array(
            'candidate_name'       => $request->candidate_name,
            'payment_type'         => $request->payment_type ,
            'offerd_salary'        => $request->offerd_salary,
            'dateofjoining'        => $request->dateofjoining,
            'msg_body'             => $body,
            'entry_by'             => $this->userid,
        );

       // dd($data);
        if (empty($request->id)) {
            $id = DB::table('generate_offer_letter')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('generate_offer_letter')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully:' . $id
        ];
        return response()->json($response);

    }



    //Job Publish 
    public function saveJobPublish(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'soc_code'             => 'required',
            'job_title'            => 'required',
            'department'           => 'required',
            'job_description'      => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'soc_code'              => !empty($request->soc_code) ? $request->soc_code : "",
            'job_title'             => !empty($request->job_title) ? $request->job_title : "",
            'department'            => !empty($request->department) ? $request->department : "",
            'job_description'       => !empty($request->job_description) ? $request->job_description : "",
            'publish_website_url_1' => !empty($request->publish_website_url_1) ? $request->publish_website_url_1 : "",
            // 'file_1'                => !empty($request->file_1) ? $request->file_1 : "",
            'publish_website_url_2' => !empty($request->publish_website_url_2) ? $request->publish_website_url_2 : "",
            //'file_2'                => !empty($request->file_2) ? $request->file_2 : "",
            'status'                => !empty($request->status) ? $request->status : "",
            'entry_by'              => $this->userid,
        );
        if (!empty($request->file('file_1'))) {
            $files = $request->file('file_1');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['file_1'] = $file_url;
        }
        if (!empty($request->file('file_2'))) {
            $files = $request->file('file_2');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['file_2'] = $file_url;
        }
        //dd($data);
        if (empty($request->id)) {
            $id = DB::table('jobpublish')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('jobpublish')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully:' . $id
        ];
        return response()->json($response);
    }
}
