import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  {
    path: "/",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/PublicPages/Homepage/LandingPage/LandingPage")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/doctors",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/PublicPages/Homepage/Doctorpage/Doctorpage")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/getintouch",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PublicPages/Getintouch/Getintouch"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/Login"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/thankyou",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Thankyou/Thankyou"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/QA/:id",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/QA/QA"))),
    ispublic: true,
    exact: true,
  },

  {
    path: "/dropdown",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Dropdown/Dropdown"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/uploaddoc",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Uploaddocs/Uploaddocs"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/createpassword",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Password/Password"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/mobile-verification",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Mobileotp/Mobileotp"))
    ),
    ispublic: true,
    exact: true,
  },
  // seprerator
  {
    path: "/forget-password",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Forgetpassword/Forgetpassword")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/reset-password",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Resetpassword/Resetpassword"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/viewtickets/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/Viewtickets/Viewtickets"))
    ),
    ispublic: false,
    exact: true,
  },
  // {
  //   path: "/advisor",
  //   component: lazy(() =>
  //     fakeDelay(delayTime)(import("../Pages/PublicPages/Advisor/Advisor"))
  //   ),
  //   ispublic: false,
  //   exact: true,
  // },
  {
    path: "/addAdvisor",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/addAdviser"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/editAdvisor/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/addAdviser"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/advisorListing",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/Advisor/Advisor"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/view-profile/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/ViewprofileAdmin/ViewprofileAdmin")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Admin-Public",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PublicPages/Advisor/Advisor"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Dashboard-Admin",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/DashboardAdmin/DashboardAdmin")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Profile",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/Profile/Profile"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Tickets",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/Tickets/Tickets"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Add-user-Account",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/AddAccount/AddAccount"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Add-doctors-opinion/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/AddOpinion/AddOpinion"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Myaccount",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/MyAccount/MyAccount"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Userdetail/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/Userdetails/Userdetails")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/change-password",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/Changepassword/Changepassword")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/signup",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Seller/Auth/SignUpSeller/SignUpSeller.jsx")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/confirm-mail",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Seller/Pages/ConfirmMail/ConfirmMail")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/startup",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Seller/Pages/Startup/Startup"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/listing",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Seller/Pages/Mylisting/Mylisting"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/createprofile",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Seller/Pages/Createprofile/Createprofile")
      )
    ),
    ispublic: true,
    exact: true,
  },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;
