## Start project
```bash
npm create vite .
npm i react-router
```
## install tailwind and daisyui
https://v3.tailwindcss.com/docs/guides/vite#react
<br>
https://daisyui.com/docs/install/

```bash
npm run dev
```
## Folder management
```
book-rental-frontend/
│── public/
│── src/
│   ├── assets/              # ไฟล์รูปภาพ, ไอคอน, โลโก้
│   ├── components/          # เก็บ Component ที่ใช้ซ้ำ เช่น Navbar, Footer, Button
│   ├── pages/               # เก็บหน้าเว็บแต่ละหน้า
│   │   ├── Home.jsx         # หน้า Front Door + Index (แสดงสินค้า)
│   │   ├── Register.jsx     # หน้า Register
│   │   ├── Login.jsx        # หน้า Login
│   │   ├── Categories.jsx   # หน้า Categories
│   │   ├── ProductDetail.jsx# หน้ารายละเอียดสินค้า
│   │   ├── Cart.jsx         # หน้า Cart
│   │   ├── Checkout.jsx     # หน้า Check-Out
│   │   ├── Profile/         # เก็บหน้าเกี่ยวกับผู้ใช้
│   │   │   ├── Overview.jsx
│   │   │   ├── AccountInfo.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── RentHistory.jsx
│   │   │   ├── ReturnBook.jsx
│   ├── layouts/             # Layout สำหรับแต่ละหน้า เช่น Navbar, Sidebar
│   ├── routes/              # กำหนด Route ต่างๆ
│   ├── context/             # ใช้จัดการ State ด้วย Context API / Zustand
│   ├── hooks/               # เก็บ Custom Hooks (เช่น useAuth, useFetch)
│   ├── services/            # API Service (fetch ข้อมูลจาก Backend)
│   ├── utils/               # Utility functions เช่น formatDate, currencyFormat
│   ├── App.jsx              # ไฟล์หลัก
│   ├── main.jsx             # Entry point


```

```jsx

```

```css
flex
pt padding top
m margim
justify-between 
text-gray-500
bg-blue-200


```