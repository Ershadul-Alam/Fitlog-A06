import ToggleButton from '@/components/my-planComponents/ToggleButton';
import CardContainer from '@/components/my-planComponents/CardContainer';
import SummaryCard from '@/components/my-planComponents/SummaryCard';

const MyPlan = () => {



    return (
        <div className='container mx-auto max-w-272'>
            <h3>MY PLAN</h3>
            <p>Cap of five lifts for today. Finish them, then load more.</p>

            <div className='p-4 items-center bg-[#13161D] font-bold text-[36px] py-6 rounded-2xl'>
                <SummaryCard/>
            </div>

            {/* Toggle Button */}
            <ToggleButton />

            {/* Seleted Card Container */}
            <div>
            <CardContainer />
            </div>
        </div>
    );
};

export default MyPlan;