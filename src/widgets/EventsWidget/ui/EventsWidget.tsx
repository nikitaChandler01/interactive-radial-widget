import type { EventsMock } from "@shared/mocks/EventsMocks";
import TransparentCard from "@shared/ui/Cards/TransparentCard";
import Carousel from "@shared/ui/Carousel/Carousel";
import { useAnimatedEventsWidget } from "../model";
import "./EventsWidget.scss";

interface IEventsWidget<T> {
  titles: Record<number, string>;
  events: T;
  setCurrentAgeId: (item: number) => void;
  ageTitle: string;
  ageId: number;
}

const EventsWidget = <T extends EventsMock>({
  titles,
  setCurrentAgeId,
  ageId,
  events: mockEvents,
}: IEventsWidget<T>) => {
  const { containerRef, events, title, swiperRef } = useAnimatedEventsWidget({
    ageId,
    setCurrentAgeId,
    mockEvents,
    titles,
  });

  return (
    <div className="events" ref={containerRef}>
      <div className="events__title">{title}</div>
      <div className="events__divider" />
      <Carousel
        swiperRef={swiperRef}
        items={events}
        itemRenderer={(item) => (
          <TransparentCard title={`${item.year}`} content={item.eventDesc} />
        )}
      />
    </div>
  );
};

export default EventsWidget;
