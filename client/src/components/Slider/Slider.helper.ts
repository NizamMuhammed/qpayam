//These interfaces are required for sending props to Styled components
//Usage can be found in Style files

export interface ArrowProps {
  direction: string
}

export interface SlideProps {
  bg: string
}

export interface WrapperProps {
  sliderIndex: number
}

//Sample data used for slides
const SlideItems = [
  {
    id: 1,
    title: "SALE",
    description: "Get many offers today! Enjoy shopping.",
    buttonText: "CLICK ME",
    img: "https://thumbs.dreamstime.com/b/cool-kid-10482368.jpg",
  },
  {
    id: 2,
    title: "Offers",
    description: "Get offers! Enjoy shopping.",
    buttonText: "CLICK ME",
    img: "https://img3.stockfresh.com/files/k/konradbak/m/19/3420073_stock-photo-picture-presenting-kids-relaxinng-on-the-grass.jpg",
  },
  {
    id: 3,
    title: "NEW ARRIVALS",
    description:
      "Summer Shooping is here. Summer Shooping is here. Summer Shooping is here. Summer Shooping is here. Summer Shooping is here. Summer Shooping is here.",
    buttonText: "Show Me",
    img: "https://st.depositphotos.com/3029723/4758/i/600/depositphotos_47580711-stock-photo-happy-kids-jumping-together.jpg",
  },
]

export { SlideItems }
