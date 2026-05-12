import Header from "../component/header";
import Hero from "../component/Hero_section";
import SEARCH_TUTORING_JOBS from "../component/SEARCH_TUTORING_JOBS";
import Our_Popular_Tutors from "../component/Our_Popular_Tutors";
import Find_Your_Subject from "../component/Find_Your_Subject_Specialist"
import Counter from "../component/counter";

function MainPage() {

    return (
        <div>
            
            <Hero/>
            <SEARCH_TUTORING_JOBS/>
            <Our_Popular_Tutors/>
            <Find_Your_Subject/>
            <Counter/>

        </div>
    )
}

export default MainPage;