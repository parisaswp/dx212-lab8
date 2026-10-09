// กำหนดประเภทข้อมูลเมนูอาหาร
export type Menu = {
  id: number;
  name: string;
  price: number;
  tag?: string;
};

// ฟังก์ชันกรองเมนูตามงบประมาณ (ไม่เกินงบ)
export function filterByBudget(menus: Menu[], budget: number): Menu[] {
  return menus.filter((m) => m.price <= budget);
}
