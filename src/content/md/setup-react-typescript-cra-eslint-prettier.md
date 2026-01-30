Dưới đây là toàn bộ nội dung bài viết đã được tổng hợp, chỉnh sửa và format lại thành một file Markdown hoàn chỉnh. Bạn có thể copy nội dung này và lưu thành file .md (ví dụ: setup-react-ts.md).

Mình đã bổ sung thêm các tiêu đề bước (Step), giải thích ngắn gọn và sắp xếp lại cấu trúc thư mục để logic hơn với lệnh create-react-app (ví dụ: CRA mặc định dùng index.tsx thay vì main.tsx, nhưng mình đã lưu ý điều chỉnh cho phù hợp).

Markdown
---
title: Setup React + TypeScript với CRA, ESLint & Prettier
description: Hướng dẫn chi tiết cách tạo project React TypeScript với Create React App, cấu hình ESLint, Prettier và chuẩn hoá codebase ngay từ đầu cho dự án cá nhân và team nhỏ.
date: 2026-01-29
author: Hiếu Trần
cover: /images/blog/setup-react-ts-eslint-prettier.png
tags: [react, typescript, eslint, prettier, cra]
---

## Giới thiệu

Khi bắt đầu một project React mới, phần setup ban đầu tưởng như đơn giản nhưng lại ảnh hưởng rất lớn đến chất lượng code về sau. Một cấu hình tốt giúp code nhất quán, dễ đọc, dễ maintain và giảm rất nhiều lỗi vặt trong quá trình phát triển.

Trong bài viết này, mình sẽ chia sẻ cách setup một project React sử dụng TypeScript với Create React App (CRA), kết hợp ESLint và Prettier để chuẩn hoá codebase ngay từ những dòng code đầu tiên. Cách setup này phù hợp cho cả dự án cá nhân lẫn team nhỏ.

---

## Yêu cầu trước khi bắt đầu

Trước khi bắt đầu, bạn cần đảm bảo máy đã cài đặt các công cụ sau:

- **Node.js**: Khuyến nghị phiên bản LTS (Long Term Support).
- **Package Manager**: npm (đi kèm Node.js) hoặc yarn.
- **Code Editor**: VS Code (Khuyến nghị vì hỗ trợ TypeScript và ESLint tốt nhất).

Kiểm tra nhanh version bằng lệnh:

```bash
node -v
npm -v
Bước 1: Khởi tạo Project
Chúng ta sẽ sử dụng template TypeScript chính chủ từ Create React App. Mở terminal và chạy lệnh sau:

Bash
npx create-react-app my-app --template typescript
Sau khi quá trình cài đặt hoàn tất, di chuyển vào thư mục dự án và chạy thử:

Bash
cd my-app
npm start
Nếu trình duyệt tự động mở ra trang React mặc định, bạn đã khởi tạo thành công!

Bước 2: Tổ chức cấu trúc thư mục
Một cấu trúc thư mục rõ ràng giúp dự án dễ mở rộng (scale) sau này. Dưới đây là cấu trúc mình thường sử dụng:

Plaintext
src/
├─ components/     # Các component dùng chung (Button, Input...)
├─ pages/          # Các trang chính của ứng dụng
├─ hooks/          # Custom hooks
├─ styles/         # Chứa file CSS/SCSS
│  ├─ globals.css  # CSS reset & base styles
│  └─ variables.css # CSS variables (màu sắc, font...)
├─ types/          # TypeScript types/interfaces chung
├─ utils/          # Các hàm tiện ích (format date, currency...)
├─ App.tsx         # Component gốc
└─ index.tsx       # Entry point (CRA mặc định là index.tsx)
Bước 3: Cài đặt ESLint & Prettier
Để code "sạch" và đẹp, chúng ta cần cài đặt các thư viện dev dependencies.

Lưu ý: Cấu hình dưới đây sử dụng ESLint Flat Config (phiên bản mới nhất). Chúng ta cần cài thêm typescript-eslint và @eslint/js để config hoạt động.

Chạy lệnh sau:

Bash
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier typescript-eslint @eslint/js
Giải thích nhanh:

eslint: Linter chính để bắt lỗi logic.

prettier: Formatter để format code đẹp.

eslint-config-prettier: Tắt các rule của ESLint conflict với Prettier.

eslint-plugin-prettier: Chạy Prettier như một rule của ESLint.

Bước 4: Cấu hình ESLint (Flat Config)
Tạo file eslint.config.mjs (hoặc eslint.config.js nếu set type module) tại thư mục gốc (ngang hàng package.json) và dán nội dung sau:

JavaScript
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      // Báo warning nếu code không đúng chuẩn Prettier
      'prettier/prettier': 'warn',
      
      // Tắt rule no-unused-vars mặc định của JS, dùng rule của TS
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      
      // React 17+ không cần import React
      'react/react-in-jsx-scope': 'off'
    },
  },
]
Bước 5: Cấu hình Prettier
Tạo file .prettierrc tại thư mục gốc để định nghĩa quy tắc format code:

JSON
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
Bước 6: Tự động Format khi Save (VS Code)
Để không phải chạy lệnh fix lỗi thủ công, hãy cấu hình VS Code để tự động sửa lỗi khi bạn lưu file (Ctrl + S).

Tạo thư mục .vscode và file settings.json bên trong:

File: .vscode/settings.json

JSON
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
Bước 7: Setup CSS cơ bản
Cuối cùng, hãy thiết lập một số biến CSS và style cơ bản để giao diện trông hiện đại hơn.

1. File: src/styles/variables.css Định nghĩa các màu sắc chủ đạo:

CSS
:root {
  --bg-background: #ffffff;
  --foreground: #1a1a1a;
  --primary: #58c4dc;
  --primary-hover: rgba(88, 196, 220, 0.15);
}
2. File: src/styles/globals.css Import font chữ và reset CSS:

CSS
@import url('./variables.css');
@import url('[https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap)');

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', system-ui, sans-serif;
  line-height: 1.7;
  background-color: var(--bg-background);
  color: var(--foreground);
}
Đừng quên import file css này vào index.tsx (hoặc App.tsx):

TypeScript
import './styles/globals.css';
Kết luận
Vậy là bạn đã có một "bộ khung" React TypeScript chuẩn chỉ với ESLint và Prettier. Việc setup này tốn chút thời gian ban đầu nhưng sẽ tiết kiệm hàng giờ debug các lỗi cú pháp ngớ ngẩn sau này.

Chúc các bạn code vui vẻ!


### Bạn có muốn mình làm gì tiếp theo không?
* Tạo file `package.json` mẫu để bạn đối chiếu version?
* Giải thích thêm về cách thêm Husky để kiểm tra lỗi trước khi commit git?