import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navgation from "./component/Navgation/Navgation";
import Home from "./page/Home";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createHashRouter, createRoutesFromElements } from "react-router-dom";
import Moivedetails from "./page/Moivedetails";
import Layout from "./page/Layout";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  useEffect(() => {
    fetchmoive();
  }, []); // يتأكد من جلب الأفلام فقط عند أول تحميل للتطبيق

  const [films, setfilms] = useState([]);  // تهيئة films كمصفوفة فارغة
  const [IsActive, setIsActive] = useState("");
  const [Pagecount, setPagecount] = useState();
  const [Count, setCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");  // للحفاظ على الكلمة المدخلة في البحث
  const [isLoading, setIsLoading] = useState(false);  // لتفعيل حالة التحميل

  const handleClick = () => {
    setIsActive(!IsActive);
  };

  // ===============جلب الأفلام======================
  async function fetchmoive() {
    setIsLoading(true);  // تفعيل حالة التحميل أثناء جلب البيانات
    const apiKey = '78ddfdc6daceeab1601f478174eb6071';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('حدث خطأ في جلب البيانات');
      }
      const data = await response.json();
      if (data.results && Array.isArray(data.results)) {
        setfilms(data.results);  // تحديث الأفلام هنا
        setPagecount(data.total_pages);  // تحديث عدد الصفحات
      } else {
        console.error('البيانات غير صحيحة:', data.results);
      }
    } catch (error) {
      console.error('خطأ في طلب الـ API:', error);
    }
    setIsLoading(false);  // إيقاف حالة التحميل بعد الانتهاء
  }

  // ===============جلب البيانات عند تغيير الصفحة======================
  async function getpage(page) {
    setIsLoading(true); 
    setCount(page) // تفعيل حالة التحميل أثناء جلب البيانات
    const apiKey = '78ddfdc6daceeab1601f478174eb6071';
    let url;
    if (searchQuery === '') {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&language=ar-US&page=${page}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('حدث خطأ في جلب البيانات');
      }
      const data = await response.json();
      if (data.results && Array.isArray(data.results)) {
        setfilms(data.results);  // تحديث الأفلام هنا
        setPagecount(data.total_pages);  // تحديث عدد الصفحات
      } else {
        console.error('البيانات غير صحيحة:', data.results);
      }
    } catch (error) {
      console.error('خطأ في طلب الـ API:', error);
    }
    setIsLoading(false);  // إيقاف حالة التحميل بعد الانتهاء
  }

  // ===============البحث عن الأفلام======================
  async function search(word) {
    setSearchQuery(word);  // حفظ الكلمة المدخلة في البحث
    setIsLoading(true);   // تفعيل حالة التحميل أثناء البحث
    

    if (!word) {
      setIsLoading(true);  // تفعيل حالة التحميل أثناء جلب البيانات
      const apiKey = '78ddfdc6daceeab1601f478174eb6071';
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('حدث خطأ في جلب البيانات');
        }
        const data = await response.json();
        if (data.results && Array.isArray(data.results)) {
          setfilms(data.results);  // تحديث الأفلام هنا
          setPagecount(data.total_pages);  // تحديث عدد الصفحات
        } else {
          console.error('البيانات غير صحيحة:', data.results);
        }
      } catch (error) {
        console.error('خطأ في طلب الـ API:', error);
      }
      setIsLoading(false);  // إيقاف حالة التحميل بعد الانتهاء
    } else {
      const apiKey = "78ddfdc6daceeab1601f478174eb6071";
      const searchRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${word}&language=ar-US`
      );
      const data = await searchRes.json();
      if (data.results && Array.isArray(data.results)) {
        setfilms(data.results);  // تحديث الأفلام بالنتائج
        setPagecount(data.total_pages); // تحديث عدد الصفحات
      } else {
        console.error("النتائج غير صحيحة من البحث:", data.results);
      }
    }
    setIsLoading(false);  // إيقاف حالة التحميل بعد الانتهاء
  }

  const routes = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Layout</h1>}>
        <Route
          path="/"
          element={<Home ones={films} getpage={getpage} word={searchQuery} search={search} Pagecount={Pagecount} />}
        />
        <Route path="/movie/:id" element={<Moivedetails />} />
      </Route>
    )
  );

  return (
    <Fragment>
      <Navgation
        isActive={IsActive}
        handleClick={handleClick}
        search={search}
      />
      
      {/* هنا يمكن إضافة حالة التحميل */}
      {isLoading ? (
       <div className="loading-container">
       <div className="spinner"></div>
     </div>
      ) : (
        <AnimatePresence mode="wait" initial={true}>
          <RouterProvider router={routes} />
        </AnimatePresence>
      )}

      <Footer />
    </Fragment>
  );
}

export default App;
