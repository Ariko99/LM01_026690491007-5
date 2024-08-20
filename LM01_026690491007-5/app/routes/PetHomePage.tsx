export default function profile (){
    const name = "paholl yangyuen";
    const Stude_ID = "026690491007-5";
    const Email = "paholl.yan@rmutto.ac.th";
    const Tel = "0886279354";

        //CSS 
        const div_maring = {
            margin:"100px 650px"
            };
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={div_maring}>
        <h1 className="font-bold text-xl mb-2">ชื่อ-สกุล {name}</h1>
        <h1 className="font-bold text-xl mb-2">รหัสนักศึกษา {Stude_ID}</h1>
        <h1 className="font-bold text-xl mb-2">อีเมล {Email}</h1>
        <h1 className="font-bold text-xl mb-2">เบอร์ {Tel}</h1>
        </div>
    );
}