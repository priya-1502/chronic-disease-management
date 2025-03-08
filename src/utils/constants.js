import { useCallback } from "react";

export const brandName = "Bayer HealthCare";

export const contentTitle = " Your Health, Our Priotrity";

export const contentDetail = "Explore the latest health information and resources from Bayer HealthCare ";

export const cardsData = [{
    id: 1,
    title : "COVID-19 Updates",
    details : "Stay Informed about the latest COVID-19 guidelines and vaccination information"
},
{
    id: 2,
    title : "Heart Health",
    details : "Discover tips and information for maintaining a healthy heart and cardiovascular System."
},
{
    id: 3,
    title : "Mental Wellness",
    details : "Explore resources and support options for maintaining good mental health"
}
]

export const login =  (token,userId) => {
    localStorage.setItem("userData", JSON.stringify(userId))

    localStorage.setItem("token", token)
  }

export const logout = () => {
    localStorage.removeItem("userData")
    localStorage.removeItem("token")
  }