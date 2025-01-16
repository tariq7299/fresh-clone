import { getAllServices } from '@/lib/data';
import BusinessServicesForm from '@/professional/_components/business-services-form';

export default async function BusinessServicesPage() {


    // const storedStepCategory = await getBusinessStepFormData("categoryStep")

    const services_with_categories = [
        {
            name: "NAILS",
            services: [
                {
                    "id": 1,
                    "name": "Manicure",
                    "desc": "A cosmetic beauty treatment for the fingernails and hands.",
                    "duration": 30,
                    "price": 25.00
                },
                {
                    "id": 2,
                    "name": "Pedicure",
                    "desc": "A cosmetic treatment of the feet and toenails.",
                    "duration": 45,
                    "price": 35.00
                }
            ]
        },
        {
            name: "HAIR",
            services: [
                {
                    "id": 3,
                    "name": "Haircut",
                    "desc": "Basic haircut and style.",
                    "duration": 45,
                    "price": 40.00
                },
                {
                    "id": 4,
                    "name": "Color",
                    "desc": "Full hair coloring service.",
                    "duration": 120,
                    "price": 100.00
                }
            ]
        },
        {
            name: "MASSAGE",
            services: [
                {
                    "id": 5,
                    "name": "Swedish Massage",
                    "desc": "Relaxing full body massage.",
                    "duration": 60,
                    "price": 80.00
                },
                {
                    "id": 6,
                    "name": "Deep Tissue",
                    "desc": "Therapeutic deep tissue massage.",
                    "duration": 60,
                    "price": 90.00
                }
            ]
        },
        {
            name: "FACIAL",
            services: [
                {
                    "id": 7,
                    "name": "Basic Facial",
                    "desc": "Cleansing and moisturizing facial treatment.",
                    "duration": 45,
                    "price": 60.00
                },
                {
                    "id": 8,
                    "name": "Anti-Aging Facial",
                    "desc": "Advanced anti-aging facial treatment.",
                    "duration": 75,
                    "price": 120.00
                }
            ]
        },
        {
            name: "WAXING",
            services: [
                {
                    "id": 9,
                    "name": "Leg Wax",
                    "desc": "Full leg waxing service.",
                    "duration": 45,
                    "price": 50.00
                },
                {
                    "id": 10,
                    "name": "Brazilian Wax",
                    "desc": "Brazilian waxing service.",
                    "duration": 30,
                    "price": 65.00
                }
            ]
        },
        {
            name: "MAKEUP",
            services: [
                {
                    "id": 11,
                    "name": "Natural Makeup",
                    "desc": "Light, natural makeup application.",
                    "duration": 45,
                    "price": 55.00
                },
                {
                    "id": 12,
                    "name": "Special Event Makeup",
                    "desc": "Full makeup for special occasions.",
                    "duration": 60,
                    "price": 85.00
                }
            ]
        },
        {
            name: "LASHES",
            services: [
                {
                    "id": 13,
                    "name": "Lash Extensions",
                    "desc": "Full set of eyelash extensions.",
                    "duration": 120,
                    "price": 150.00
                },
                {
                    "id": 14,
                    "name": "Lash Fill",
                    "desc": "Maintenance fill for lash extensions.",
                    "duration": 60,
                    "price": 75.00
                }
            ]
        },
        {
            name: "BROWS",
            services: [
                {
                    "id": 15,
                    "name": "Brow Shaping",
                    "desc": "Professional eyebrow shaping.",
                    "duration": 20,
                    "price": 25.00
                },
                {
                    "id": 16,
                    "name": "Brow Tinting",
                    "desc": "Eyebrow tinting service.",
                    "duration": 30,
                    "price": 35.00
                }
            ]
        },
        {
            name: "TANNING",
            services: [
                {
                    "id": 17,
                    "name": "Spray Tan",
                    "desc": "Full body spray tanning service.",
                    "duration": 30,
                    "price": 45.00
                },
                {
                    "id": 18,
                    "name": "Airbrush Tan",
                    "desc": "Custom airbrush tanning service.",
                    "duration": 45,
                    "price": 65.00
                }
            ]
        },
        {
            name: "BODY TREATMENTS",
            services: [
                {
                    "id": 19,
                    "name": "Body Wrap",
                    "desc": "Detoxifying body wrap treatment.",
                    "duration": 90,
                    "price": 110.00
                },
                {
                    "id": 20,
                    "name": "Body Scrub",
                    "desc": "Full body exfoliation treatment.",
                    "duration": 60,
                    "price": 85.00
                }
            ]
        }
    ]


    const services = await getAllServices()

    console.log("services", services)


    return <BusinessServicesForm services={services_with_categories} />
}