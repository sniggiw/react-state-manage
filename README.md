# React State Management Demo

一个基于 React useReducer 的状态管理示例项目，演示如何使用 Context API 和自定义 Hook 进行全局状态管理。

## 项目概述

本项目展示了一个简洁的 React 状态管理方案，使用 React 内置的 useReducer Hook 结合 Context API 实现全局状态管理，无需引入额外的第三方状态管理库。

## 技术栈

-   **React 19.1.0** - 前端框架
-   **TypeScript 5.8.3** - 类型安全
-   **Vite 7.0.4** - 构建工具
-   **Sass 1.89.2** - CSS 预处理器
-   **ESLint** - 代码规范

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── header/         # Header 组件
│   │   ├── index.tsx
│   │   └── index.module.scss
│   └── main/           # Main 组件
│       ├── index.tsx
│       └── index.module.scss
├── hooks/              # 自定义 Hook
│   └── useStore.ts     # 状态管理 Hook
├── stores/             # 状态管理
│   └── index.tsx       # Context 和 Reducer 定义
├── type/               # 类型定义
│   └── store.ts        # 状态和动作类型
├── assets/             # 静态资源
│   └── css/
│       └── global.scss
├── index.tsx           # 根组件
└── main.tsx           # 应用入口
```

## 核心功能

### 状态管理架构

项目采用 **useReducer + Context** 的状态管理模式：

1. **状态定义** (`src/type/store.ts`)

    - `StoreState`: 定义全局状态结构
    - `StoreAction`: 定义状态变更动作类型

2. **状态管理** (`src/stores/index.tsx`)

    - `PageStateContext`: 状态上下文
    - `PageDispatchContext`: 分发上下文
    - `PageReducer`: 状态更新逻辑
    - `GetPageInitStateFn`: 初始状态生成

3. **自定义 Hook** (`src/hooks/useStore.ts`)
    - 封装状态访问和更新逻辑
    - 提供类型安全的状态操作接口

### 支持的状态操作

-   **单个属性更新** (`change` action)

    -   更新状态中的单个字段
    -   类型安全的 key-value 更新

-   **批量属性更新** (`changeMore` action)
    -   同时更新多个状态字段
    -   支持部分状态更新

### 组件功能

-   **Header 组件**: 展示当前状态，提供单个状态更新功能（反转姓名）
-   **Main 组件**: 展示当前状态，提供批量状态更新功能（反转姓名 + 年龄加一）

## 安装和运行

### 环境要求

-   Node.js >= 16
-   pnpm (推荐) 或 npm

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发环境

```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
# 构建项目
pnpm build

# 或
npm run build
```

### 代码检查

```bash
# ESLint 检查
pnpm lint

# 或
npm run lint
```

### 预览生产构建

```bash
# 预览构建结果
pnpm preview

# 或
npm run preview
```

## 使用示例

### 1. 在组件中使用状态

```tsx
import useStore from "../hooks/useStore";

function MyComponent() {
    const { storeState, dispatch } = useStore();

    // 访问状态
    console.log(storeState.name, storeState.age);

    // 更新单个属性
    const updateName = () => {
        dispatch({
            type: "change",
            key: "name",
            value: "新名称",
        });
    };

    // 批量更新
    const updateMultiple = () => {
        dispatch({
            type: "changeMore",
            obj: {
                name: "新名称",
                age: 30,
            },
        });
    };

    return (
        <div>
            <p>姓名: {storeState.name}</p>
            <p>年龄: {storeState.age}</p>
            <button onClick={updateName}>更新姓名</button>
            <button onClick={updateMultiple}>批量更新</button>
        </div>
    );
}
```

### 2. 扩展状态类型

```tsx
// 在 src/type/store.ts 中扩展状态
export type StoreState = {
    name: string;
    age: number;
    email?: string; // 新增字段
    isActive?: boolean; // 新增字段
};

// 相应的动作类型会自动推导
```

### 3. 添加新的动作类型

```tsx
// 在 src/type/store.ts 中添加新动作
export type StoreAction =
    | {
          type: "change";
          key: keyof StoreState;
          value: StoreState[keyof StoreState];
      }
    | { type: "changeMore"; obj: Partial<StoreState> }
    | { type: "reset" } // 新增重置动作
    | { type: "increment"; field: "age" }; // 新增递增动作

// 在 src/stores/index.tsx 的 PageReducer 中处理新动作
export const PageReducer = (
    state: StoreState,
    action: StoreAction
): StoreState => {
    switch (action.type) {
        case "change":
            return { ...state, [action.key]: action.value };
        case "changeMore":
            return { ...state, ...action.obj };
        case "reset":
            return GetPageInitStateFn();
        case "increment":
            return { ...state, [action.field]: state[action.field] + 1 };
        default:
            return state;
    }
};
```

## 设计特点

1. **类型安全**: 完整的 TypeScript 类型定义，编译时错误检查
2. **简洁易用**: 基于 React 内置 Hook，学习成本低
3. **可扩展性**: 支持灵活的状态结构和动作类型扩展
4. **性能优化**: 使用 Context 分离，避免不必要的重渲染
5. **模块化**: 清晰的项目结构，便于维护和扩展

## 适用场景

-   中小型 React 应用的状态管理
-   不想引入额外状态管理库的项目
-   学习 React 状态管理原理的示例项目
-   需要类型安全状态管理的 TypeScript 项目
