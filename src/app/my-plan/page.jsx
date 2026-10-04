import ToggleButton from '@/components/my-planComponents/ToggleButton';
import CardContainer from '@/components/my-planComponents/CardContainer';
import SummaryCard from '@/components/my-planComponents/SummaryCard';
import Sortby from '@/components/my-planComponents/Sortby';

const MyPlan = () => {



    return (
        <div className='container mx-auto max-w-272 px-4 sm:px-6'>
            <h3 className='text-2xl font-bold mt-8'>MY PLAN</h3>
            <p className='text-gray-500 text-sm mt-1 mb-6'>Cap of five lifts for today. Finish them, then load more.</p>

            <div className='items-center rounded-2xl bg-[#13161D] p-4 py-5 font-bold text-2xl sm:p-6 sm:py-6 sm:text-[36px]'>
                <SummaryCard/>
            </div>

            {/* Toggle & Sort by Button */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <ToggleButton />
            <Sortby/>
            </div>
            
            {/* Seleted Card Container */}
            <div>
            <CardContainer />
            </div>
        </div>
    );
};

export default MyPlan;