import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "第一篇文章", content: "這是第一篇文章的內容。" },
  { id: 2, title: "第二篇文章", content: "這是第二篇文章的內容。" },
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#fdf8f4] text-[#333] font-sans">
        <nav className="bg-[#fcefe3] p-4 shadow-md rounded-b-2xl">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">首頁</Link></li>
            <li><Link to="/about" className="hover:underline">關於我們</Link></li>
          </ul>
        </nav>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">部落格首頁</h1>
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.id} className="bg-white p-4 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <Link to={`/post/${post.id}`} className="text-blue-500 underline">閱讀更多</Link>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h1 className="text-2xl font-bold mb-4 text-red-500">關於我們</h1>
    <p>這是部落格的關於頁面。這個網站使用柔和配色與圓角設計，帶來舒適的閱讀體驗。</p>
  </div>
);

const Post = ({ id }) => {
  const postId = parseInt(window.location.pathname.split("/").pop());
  const post = posts.find(p => p.id === postId);
  return post ? (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  ) : <p>找不到文章。</p>;
};

export default App;
