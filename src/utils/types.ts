interface BaseAction {
  id: number,
  type: 'expense' | 'income'
  title: string,
  amount: number,
  date: Date
}

interface Expense extends BaseAction {
  type: 'expense',
  description: string,
  category: number
}

interface Income extends BaseAction {
  type: 'income'
}

type Action = Expense | Income;

interface Category {
  id: number,
  name: string,
  color: string,
  icon: string,
}

interface Data {
  personal_info: {
    name: string,
    avatar: string
  },
  theme: 'light' | 'dark',
  actions: Action[],
  categories: Category[]
}

interface NavRouteType {
  name: string,
  path: string,
  icon: string
}

export type { Action, Category, NavRouteType, Data }