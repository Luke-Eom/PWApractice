
/* => fat arrow
    : intuitive way to use function in javascripts


*/
const fnAttdCheckIn = () => '{{ enterTime }}에 오셨습니다!' // datetime.now 지금 시간 

const fnAttdCheckOut = () => '{{ leaveTime }}에 나가셨습니다!' // datetime.now 지금 시간

const fnCalWOTime = (fnAttdCheckIn, fnAttdCheckOut) => fnAttdCheckOut() - fnAttdCheckIn();

const fnWorkOutTime = () => '{{ fnCalWOTime결과값 }} 운동하셨습니다!'
