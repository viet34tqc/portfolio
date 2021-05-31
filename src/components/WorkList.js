import useWorks from "../hooks/useWorks";
import { TabItem, Tabs } from './Tabs';
import WorkItem from "./WorkItem";

const WorkList = () => {
    const allWorks = useWorks();
    return (
        <Tabs defaultIndex="WordPress">
			{
				Object.entries( allWorks ).map( ( [ tag, works ] ) => {
					return (
						<TabItem key={ tag } label={ tag } index={ tag }>
							{
								works.map( work => <WorkItem key={ work.link } work={ work } /> )
							}
						</TabItem>
					);
				} )
			}
		</Tabs>
    );
};

export default WorkList;

