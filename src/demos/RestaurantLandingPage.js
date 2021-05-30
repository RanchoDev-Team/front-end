import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import eduzzLogoImage from "images/eduzz-logo.png";
import homeImage from "images/foto-home.png";
import woodsImage from "images/woods.png";
import OldEvents from "components/ranchodev/OldEvents";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  
  const HighlightedText = tw.span`bg-primary-500 border-2 border-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-white border-2 border-primary-500 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Evento on-line<HighlightedText>25 de Setembro</HighlightedText><HighlightedTextInverse>2021</HighlightedTextInverse></>}
        description="Um evento de Devs para Devs, onde compartilhamos conhecimento na área de tecnologia! =]"
        imageSrc={woodsImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Garanta já seu ingresso"
      />
      <MainFeature
        id="about"
        heading={
          <>
            Sobre o evento
          </>
        }
        description={
          <Description>
            É um evento com o foco em compartilhar conhecimento na área de tecnologia principalmente com quem está iniciando nessa área que amamos de ❤️!
            <br />
            <br />
            O evento acontece todo ano na cidade de Sorocaba - SP de forma presencial, mas por conta da pandemia será feito <strong>100% on-line.</strong>
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={homeImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <OldEvents />

      <Features
        id="support"
        heading={
          <>
            Apoiadores ❤️
          </>
        }
        cards={[
          {
            imageSrc: eduzzLogoImage,
            url: "https://google.com"
          },
          {
            imageSrc: eduzzLogoImage,
            url: "https://timerse.com"
          },
          {
            imageSrc: eduzzLogoImage,
            url: "https://reddit.com"
          }
        ]}
        imageCss={tw`w-full! h-auto p-8!`}
      />

      <Footer />
    </AnimationRevealPage>
  );
}
