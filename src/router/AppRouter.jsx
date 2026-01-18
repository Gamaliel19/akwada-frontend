import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Domains from '../pages/Domains/Domains'
import Projects from '../pages/Projects/Projects'
import News from '../pages/News/News'
import NewsDetail from '../pages/News/NewsDetail'
import Contact from '../pages/Contact/Contact'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="interventions" element={<Domains />} />
        <Route path="projects" element={<Projects />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRouter