import React from "react";

const According = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />

        <div className="collapse-title font-semibold">
          Why did you choose WebRTC for implementing real-time communication in
          TalkSync?
        </div>
        <div className="collapse-content text-sm">
          WebRTC provides direct peer-to-peer audio and video streaming with
          very low latency, which is essential for smooth language practice. It
          works directly in browsers without extra plugins, supports screen
          sharing, and ensures end-to-end encryption for security. This makes it
          more efficient and cost-effective than building a custom streaming
          service.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How does your user matching system work, and why is it important for
          TalkSync?
        </div>
        <div className="collapse-content text-sm">
          The user matching system uses filters like language preference,
          proficiency level, and availability to pair learners with the most
          suitable partners. This ensures that learners can practice with
          someone at a complementary level, making sessions more engaging and
          productive. Without proper matching, users may face frustration and
          drop out.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          What role does the feedback and tracking system play in improving the
          learning experience?
        </div>
        <div className="collapse-content text-sm">
          After each session, users provide ratings and feedback, which helps
          improve partner recommendations and ensures quality. The learning
          tracking system rewards users with points for consistent practice,
          encouraging motivation and long-term engagement. Together, they create
          a gamified, user-centered learning environment.
        </div>
      </div>
    </div>
  );
};

export default According;
