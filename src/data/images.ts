import aboutImage from "../assets/about.avif";
import boxingImage from "../assets/boxing.webp";
import functionalImage from "../assets/fucntional.jpg";
import functionalCoachImage from "../assets/functional.jpg";
import headCoachImage from "../assets/head coach.avif";
import nutritionCoachImage from "../assets/Nutrition.jpg";
import oliviaCoachImage from "../assets/Olivia Johnson.avif";
import personalImage from "../assets/personal.webp";
import strengthTrainingImage from "../assets/Strength-Training.jpg";
import weightLossImage from "../assets/Weight-Loss-Program.jpg";
import yogaImage from "../assets/yoga.jpg";

export const images = {
  about: aboutImage,
  strengthTraining: strengthTrainingImage,
  weightLoss: weightLossImage,
  functional: functionalImage,
  boxing: boxingImage,
  yoga: yogaImage,
  personal: personalImage,
  headCoach: headCoachImage,
  nutritionCoach: nutritionCoachImage,
  functionalCoach: functionalCoachImage,
  yogaCoach: oliviaCoachImage,
} as const;
