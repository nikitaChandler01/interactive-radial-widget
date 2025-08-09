import type { TimelineMock } from "@shared/mocks/TimelineMocks";
import { OdometerCounter } from "@shared/ui/Typography/OdometerCounter";
import "./TimelineYears.scss";

interface ITimelineYears<T> {
  timelineAges: T[];
  currentAge: number;
}

const TimelineYears = <T extends TimelineMock>({
  currentAge,
  timelineAges,
}: ITimelineYears<T>) => {
  const foundTimeline = timelineAges.find(({ id }) => id === currentAge);
  const startYear = foundTimeline?.startYear;
  const endYear = foundTimeline?.endYear;
  return (
    <div className="timeline-years">
      <OdometerCounter initialValue={startYear} />
      <OdometerCounter color="#EF5DA8" initialValue={endYear} />
    </div>
  );
};

export default TimelineYears;
