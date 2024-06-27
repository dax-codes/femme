<template>
  <div class="w-full overflow-hidden relative bg-black text-crimson-200 font-mont">
    <!-- Header Component -->
    <Header
      :onHomeTextClick="HomeTextClick"
      :onGalleryTextClick="GalleryTextClick"
      :onTopVideoTextClick="TopVideoTextClick"
      :onGirlsTextClick="GirlsTextClick"
    />

    <!-- Main Content Section -->
    <div class="mt-5 flex flex-col items-center justify-start gap-5 text-crimson-300">
      <!-- Header2 and Button Components Section -->
      <div class="flex flex-col items-center justify-start gap-10">
        <Header2 />
        <Button />
      </div>

      <!-- Banner Component Section -->
      <Banner />
    </div>
    <TrendingVideo/>

    <!-- Body Component Section -->
    <Body />
   
    <div class="relative leading-[125%] text-[2rem] lg:text-[3rem] font-black  text-center">
                 Testimonial
              </div>
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <ReviewBox
      reviewer="Ethan B."
      location="Australia"
      content="During my business trip to Sydney, I craved a night of intimacy and connection. FemmeFling connected me with the enchanting Emma. From the moment we met, her warmth and beauty were captivating. We enjoyed a beautiful evening that culminated in a deeply sensual and unforgettable night. Emma’s ability to tune into my desires was remarkable. FemmeFling’s discreet and professional service made it all possible."
    />
    <ReviewBox
      reviewer="Jane D."
      location="USA"
      content="I had an amazing experience with FemmeFling. The service was professional and discreet. My evening with Mark was one of the most memorable experiences of my life. Highly recommended!"
    />
    <ReviewBox
      reviewer="John S."
      location="UK"
      content="FemmeFling provided an excellent service. The arrangement was smooth and Emma was fantastic. She made my night in London truly special. Would definitely use the service again."
    />
    <ReviewBox
      reviewer="Emily R."
      location="Canada"
      content="I was nervous about using a service like this, but FemmeFling exceeded all my expectations. The professionalism and discretion were top-notch. My time with Alex was wonderful."
    />
  </div>
    <!-- ContactUs Component Section -->
    <ContactUs />

    <!-- FrequentQuestion Component Section -->
    <FrequentQuestion />

    <!-- Footer Component Section -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./../components/Footer.vue";
import FrequentQuestion from "./../components/FrequentQuestion.vue";
import Header from "../components/Header.vue";
import Header2 from "../components/Header2.vue";
import Button from "../components/Button.vue";
import Banner from "../components/Banner.vue";
import ContactUs from "../components/ContactUs.vue";
import Body from "../components/Body.vue";
import TrendingVideo from "../components/TrendingVideo.vue";
import ReviewBox from "../components/Review.vue"

// Scroll to anchor function
function scrollToAnchor(anchorSelector: string) {
  const anchor = document.querySelector(anchorSelector);
  if (anchor) {
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

// Event handlers for Header component
function HomeTextClick() {
  scrollToAnchor("[data-scroll-to='chosenOneText']");
}

function GalleryTextClick() {
  scrollToAnchor("[data-scroll-to='frameContainer']");
}

function TopVideoTextClick() {
  scrollToAnchor("[data-scroll-to='frameContainer']");
}

function GirlsTextClick() {
  scrollToAnchor("[data-scroll-to='frameContainer']");
}

// Event handlers for Header2 and Button components (if needed)
// Add your event handlers here as per your component logic

// Event handler for ContactUs component
function onChatContainerClick() {
  window.open("https://wa.me/+18652991020");
}
</script>
