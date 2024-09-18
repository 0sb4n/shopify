export const navLink =[
    {
        label:"Home",
        key:"Home",
        route:"/"
    },{
        label:"Services",
        key:"Services",
        route:"/services"
    },{
        label:"pricing",
        key:"pricing",
        route:"/pricing"
    },{
        label:"About",
        key:"About",
        route:"/About"

    },{
        label:"Contact",
        key:"Contact",
        route:"/Contact"
    }
]
export const cardsData=[
    {
        title: "Electric Appliance Home Repair Service",
        price: "₹99",
        description: "Comprehensive home service for all your appliance repair needs.",
        features: [
          "Expert technicians for every appliance",
          "Affordable flat-rate pricing",
          "Convenient and hassle-free service"
        ],
        cta: "Book Now",
        images:[
          "/assets/images/fan.jpg",
          "/assets/images/washing.jpg"
        ]
      },
    {
      "title": "Commercial Appliance & Motor Repair",
      "price": "₹199",
      "description": "Specialized repair services for your commercial needs.",
      "features": [
        "Induction Motors, Generators, and more",
        "Skilled technicians with industry expertise",
        "Reliable service at an unbeatable price"
      ],
      "cta": "Schedule Your Service",
      images:[
        "/assets/images/induction.jpg",
        "/assets/images/generetor.jpg"
      ]
    },
    {
      "title": "Industry Management Plan",
      "price": "₹9999/m",
      "description": "End-to-end maintenance and repair solutions for your entire facility.",
      "features": [
        "Comprehensive support for all industrial equipment",
        "Preventative maintenance and emergency repair",
        "Dedicated team of experts",
        "24/7 service availability"
      ],
      "cta": "Sign Up Now",
      images:[
        "/assets/images/industry.webp",
        "/assets/images/winder.jpg"
      ]
    }
  ]
  export const formData = [
    {
      label:'name',
      placeholder:'Enter your Name',
    },
    {
      label:'phone',
      placeholder:'Enter your Number',
    },
    {
      label:'email',
      placeholder:'Enter your Name',
    },
    {
      label:'category',
      value:'select Product',
      options:[
        "Fan",
        "AC",
        "washing machine",
        "Refregeretor"

      ]}
    ]
    export const serviceSection=[
      {
        "image":"/assets/icons/home.svg",
        "category": "Home Appliances Repair",
        "services": [
          {
            "name": "Fan Repair",
            "description": "Expert repair services for all types of home fans."
          },
          {
            "name": "Air Conditioner Repair",
            "description": "Servicing and repair of residential air conditioning units."
          },
          {
            "name": "Refrigerator Repair",
            "description": "Repair and maintenance services for home refrigerators."
          }
        ]
      },
      {
        "image":"/assets/icons/bank.svg",
        "category": "Commercial Appliances Repair",
        "services": [
          {
            "name": "Air Conditioner Repair",
            "description": "Servicing and repair of commercial air conditioning systems."
          },
          {
            "name": "Refrigeration Systems Repair",
            "description": "Repair services for commercial refrigeration units."
          },
          {
            "name": "Generator Repair",
            "description": "Maintenance and repair of commercial power generators."
          }
        ]
      }
,
{
  "image":"/assets/icons/industry.svg",
  "category": "Industrial Appliances Repair",
  "services": [
    {
      "name": "Three-Phase Motor Repair",
      "description": "Expert repair and servicing of industrial three-phase motors."
    },
    {
      "name": "Generator Repair",
      "description": "Repair and maintenance services for industrial power generators."
    },
    {
      "name": "Machinery Maintenance",
      "description": "Comprehensive maintenance services for industrial machinery."
    }
  ]
}


      
    ]