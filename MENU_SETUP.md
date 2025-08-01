# Menu Component Setup

## Tổng quan

Đã tạo Menu component với scroll navigation giống như trong hình, cho phép scroll đến các section khác nhau.

## Tính năng chính

### ✅ Đã cấu hình:

- **Vertical Navigation**: Menu dọc bên trái màn hình
- **Scroll Detection**: Tự động detect section đang active
- **Smooth Scroll**: Scroll mượt mà đến section
- **Active State**: Highlight item đang active
- **Hover Effects**: Animation khi hover
- **Responsive Design**: Hoạt động tốt trên mọi thiết bị

### 🎨 Design Features:

- **Background**: Trắng với backdrop blur
- **Icons**: React Icons với màu pink
- **Active Color**: Pink (#ec4899)
- **Hover Effects**: Scale animation
- **Active Indicator**: Bar màu pink bên trái

## Cấu trúc Menu Items

```typescript
const menuItems: MenuItem[] = [
  { id: "home", icon: FaHome, label: "Home", sectionId: "home" },
  { id: "about", icon: FaUserAlt, label: "About", sectionId: "about" },
  { id: "services", icon: FaBriefcase, label: "Services", sectionId: "services" },
  { id: "experience", icon: FaGraduationCap, label: "Experience", sectionId: "experience" },
  { id: "works", icon: FaLayerGroup, label: "Works", sectionId: "works" },
  { id: "blog", icon: FaPencilAlt, label: "Blog", sectionId: "blog" },
  { id: "contact", icon: FaEnvelope, label: "Contact", sectionId: "contact" },
];
```

## Cách sử dụng

### 1. Thêm Menu vào Layout:

```tsx
import Menu from "./components/Menu";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Menu />
      {children}
    </div>
  );
}
```

### 2. Tạo Sections với ID:

```tsx
<section id="home">
  <h1>Home Section</h1>
</section>

<section id="about">
  <h1>About Section</h1>
</section>

<section id="services">
  <h1>Services Section</h1>
</section>
```

### 3. Customize Menu Items:

```tsx
// Trong Menu.tsx, thay đổi menuItems array
const menuItems: MenuItem[] = [
  { id: "custom", icon: FaCustom, label: "Custom", sectionId: "custom" },
  // ... thêm items khác
];
```

## Scroll Behavior

### Auto Detection:

- Menu tự động detect section đang visible
- Update active state dựa trên scroll position
- Offset 100px để detection chính xác hơn

### Manual Navigation:

- Click vào menu item để scroll đến section
- Smooth scroll với `behavior: "smooth"`
- Scroll đến `block: "start"` của section

## Styling Options

### Thay đổi màu sắc:

```tsx
// Thay đổi active color
className={`${isActive ? "text-blue-500" : "text-gray-700"}`}

// Thay đổi hover color
className={`${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-400"}`}
```

### Thay đổi vị trí:

```tsx
// Menu bên trái (mặc định)
<nav className="fixed left-8 top-1/2 transform -translate-y-1/2">

// Menu bên phải
<nav className="fixed right-8 top-1/2 transform -translate-y-1/2">

// Menu ở giữa
<nav className="fixed left-1/2 top-8 transform -translate-x-1/2">
```

### Thay đổi background:

```tsx
// Background trong suốt
<div className="bg-transparent">

// Background đen
<div className="bg-black/90">

// Background với border
<div className="bg-white/90 border border-gray-300">
```

## Performance Tips

- **Debounce scroll events** nếu cần
- **Intersection Observer** cho performance tốt hơn
- **Lazy load** sections nếu có nhiều content

## Troubleshooting

### Menu không hiển thị:

- Kiểm tra z-index
- Đảm bảo không bị che bởi element khác

### Scroll không hoạt động:

- Kiểm tra section có đúng ID không
- Đảm bảo section có content đủ cao

### Active state không đúng:

- Điều chỉnh offset trong scroll detection
- Kiểm tra section positioning
