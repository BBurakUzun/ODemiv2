'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import TopBar from '../components/TopBar';
import SlideComp from '../components/SlideComp';
import SideBar from '../components/SideBar';
import RecVideos from '../components/RecVideos';
import ShortsPreview from '../components/ShortsPreview';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [courses, setCourses] = useState([]);
  const [topBarVisible, setTopBarVisible] = useState(true);

  const videos = [
    { course_id: 1, lesson_id: 1, category_id: 1, title: 'React Dersi 1', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 1, lesson_id: 2, category_id: 1, title: 'React Dersi 1', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 1, lesson_id: 3, category_id: 1, title: 'React Dersi 1', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 2, lesson_id: 1, category_id: 2, title: 'Next.js Başlangıç', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 3, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 4, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 5, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 6, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 7, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 8, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 9, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
    { course_id: 10, lesson_id: 1, category_id: 3, title: 'JWT Mantığı', thumbnail: '/thumbs/react1.png', videoUrl: '/videos/react1.mp4' },
  ];

  const shorts = [
    {
      id: 101,
      title: 'brainrot ders 1',
      thumbnail: '/thumbs/thumbnail1.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 102,
      title: 'brainrot ders 2',
      thumbnail: '/thumbs/thumbnail2.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 103,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail3.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 104,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail1.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 105,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail2.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 106,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail3.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 107,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail1.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 108,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail2.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 109,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail3.png',
      videoUrl: '/videos/react1.mp4',
    },
    {
      id: 110,
      title: 'brainrot3 ders 3',
      thumbnail: '/thumbs/thumbnail1.png',
      videoUrl: '/videos/react1.mp4',
    }
  ];


  useEffect(() => {

    fetch('http://localhost:8080/api/course/all-courses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error(`Sunucu hatası: ${res.status}`);
        return res.json();
      })
      .then(data => setCourses(data))
      .catch(err => {
        console.error(err);
        console.log("");
      })
      .finally(() => {
        console.log("naber")
      });
  }, []);

  return (
    <div>
      <TopBar onVisibilityChange={setTopBarVisible} />
      <SideBar topOffset={topBarVisible} shouldOpen={true} />
      <SlideComp />

      <ShortsPreview shorts={shorts} />

      <RecVideos videos={courses} />
    </div>
  );
}
