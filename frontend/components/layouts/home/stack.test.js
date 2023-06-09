import React, { useMemo, useState } from "react";
import { render } from "react-dom";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { Button, useTheme, Text, Spacer, Card } from "@nextui-org/react";
import Image from "next/image";
import ImgIntro from "../../../public/images/home/exercise/intro.png";
import ImageSquat from "../../../public/images/home/exercise/squats.png";
import ImageLunge from "../../../public/images/home/exercise/lunge.png";
import ImageOneLetUp from "../../../public/images/home/exercise/one_leg_up.png";
import { useRouter } from "next/router";
import { LottieSuccessCheck } from "@/components/commons/lotties";

// const res = { data: ["#fff", "#cb7c7a", " #36a18b"] };
const res = {
  data: [
    {
      name: "Today",
      color: "#fff",
      description: "I brought some proper exercise routine for you!",
      image: ImgIntro,
    },
    {
      name: "Stretch and Pull",
      color: "#fff",
      description:
        "Stretch and Pull is a low-impact workout that involves stretching and pulling movements to improve flexibility, strength, and balance.",
      // "Stretch and Pull is a low-impact workout that involves stretching and pulling movements to improve flexibility, strength, and balance. To perform this exercise, stand with your feet hip-width apart and your arms extended in front of you. Then, reach your arms up and back as far as you can, then pull them back down and repeat the movement for several repetitions.",
      image: ImageLunge,
    },
    {
      name: "Shoulder Rotation",
      color: "#fff",
      description:
        "Shoulder Rotation is a simple exercise that targets the shoulders and upper back.",
      // "Shoulder Rotation is a simple exercise that targets the shoulders and upper back. To perform this exercise, stand with your feet shoulder-width apart and your arms at your sides. Then, slowly raise your shoulders up towards your ears, rotate them back, and lower them down. Repeat this movement for several repetitions.",
      image: ImageOneLetUp,
    },
    {
      name: "Knee Stretch",
      color: "#fff",
      description:
        "Knee Stretch is a simple workout that helps to strengthen the muscles in the legs and improve balance.",
      // "Knee Stretch is a simple workout that helps to strengthen the muscles in the legs and improve balance. To perform this exercise, stand with your feet shoulder-width apart and your hands on your hips. Then, lift one knee up towards your chest and hold for a few seconds before lowering it back down. Repeat with the other leg for several repetitions.",
      image: ImageSquat,
    },
    {
      name: "Squats",
      color: "#fff",
      description:
        "Squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
      image: ImageSquat,
    },
    {
      name: "High Knees",
      color: "#fff",
      description:
        "High Knees is a cardiovascular workout that targets the lower body and improves coordination. ",
      // "High Knees is a cardiovascular workout that targets the lower body and improves coordination. To perform this exercise, stand with your feet hip-width apart and alternate lifting each knee up towards your chest as high as possible while jogging in place. Aim to keep your core engaged and land lightly on the balls of your feet with each step. Repeat for several repetitions.",
      image: ImageOneLetUp,
    },
    // {
    //   name: "Squats6",
    //   color: "#fff",
    //   description:
    //     "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
    //   image: ImageSquat,
    // },
    // {
    //   name: "Squats7",
    //   color: "#fff",
    //   description:
    //     "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
    //   image: ImageSquat,
    // },
    // {
    //   name: "Squats8",
    //   color: "#fff",
    //   description:
    //     "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
    //   image: ImageSquat,
    // },

    // "#cb7c7a",
    // " #36a18b",
  ],
};
const CARD_OFFSET = 12.5;
const SCALE_FACTOR = 0.05;

export default function CardStackTest() {
  //
  const router = useRouter();
  const { theme } = useTheme();
  //
  const [cards, setCards] = useState(res.data);
  const [isFliped, setIsFliped] = useState(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(true);
  //
  const rotateY = useMotionValue(0);
  const opacityCardContent = useMotionValue(100);
  const width = useMotionValue("90vw");
  const height = useMotionValue("120vw");

  const removeFirst = (from) => {
    setIsFliped(false);
    rotateY.set(0);
    console.log(rotateY);
    var newCards = [...cards];
    newCards.shift();
    console.log(newCards);
    setCards(newCards);
  };

  async function handlerCardFlip() {
    animate(rotateY, isFliped ? 0 : 180, {
      type: "spring",
      damping: 12.5,
      stiffness: 100,
    });
    setIsFliped(!isFliped);
  }

  return (
    <div className="mx-auto" style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.length == 0 ? (
          <motion.div
            animate={{
              scale: [0.75, 1],
              opacity: [0, 1],
            }}
          >
            <Card
              variant="flat"
              style={{ backgroundColor: "transparent", borderWidth: 0 }}
            >
              <Card.Body>
                <div className="flex flex-col justify-center items-center h-[80vw]">
                  {/* <Image src={ImageSquat} width={200}></Image> */}
                  <LottieSuccessCheck></LottieSuccessCheck>
                  <Spacer y={1}></Spacer>
                  <Text className="font-bold text-3xl text-white">
                    All Complete!
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ) : (
          cards.map((e, index) => {
            var canDrag = index === 0;
            return (
              <motion.li
                // layout
                key={e.name}
                style={{
                  ...cardStyle,
                  backgroundColor: e.color,
                  cursor: canDrag ? "grab" : "auto",
                  rotateY: canDrag ? rotateY : 0,
                  width: canDrag ? width : "90vw",
                  height: canDrag ? height : "120vw",
                }}
                className="tranform-gpu shadow-2xl shadow-gray-900"
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: res.data.length - index,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  },
                }}
                drag={canDrag ? "x" : false}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                onDragEnd={() => removeFirst(index)}
                onClick={handlerCardFlip}
              >
                {index == 0 && isAnimationCompleted && (
                  <>
                    {isFliped ? (
                      <motion.div
                        style={{
                          opacity: opacityCardContent,
                          transform: "scaleX(-1)",
                        }}
                        className="flex flex-col justify-between items-center h-full w-[80%] mx-auto transform-gpu overflow-y-scroll"
                      >
                        <Text className="font-bold text-black text-4xl pt-12">
                          {e.name}
                        </Text>
                        <Text className="font-md text-black text-lg text-justify overflow-y-scroll">
                          {e.description}
                        </Text>
                        <Button
                          rounded
                          style={{
                            backgroundColor: theme.colors.primary.value,
                            height: "12.5%",
                            width: "100%",
                          }}
                          onPress={() => {
                            if (e.name !== "Today") {
                              router.push(
                                "/videoInfo?" +
                                  "name=" +
                                  e.name.replaceAll(" ", "")
                              );
                            }
                          }}
                          className="bottom-12"
                        >
                          <Text className="font-bold text-white text-2xl">
                            {e.name === "Today"
                              ? "Swipe to start Routine"
                              : "Start Tutorial"}
                          </Text>
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        style={{ opacity: opacityCardContent }}
                        className="flex flex-col justify-center items-center h-full"
                      >
                        <Image src={e.image} alt="squat" height={400}></Image>
                      </motion.div>
                    )}
                  </>
                )}
              </motion.li>
            );
          })
        )}
      </ul>
    </div>
  );
}
const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  height: "65vh",
};

const cardWrapStyle = {
  position: "relative",
  width: "90vw",
  height: "120vw",
};

const cardStyle = {
  position: "absolute",
  width: "90vw",
  height: "120vw",
  borderRadius: "20px",
  transformOrigin: "top center",
  listStyle: "none",
};

const variantFlip = {};
