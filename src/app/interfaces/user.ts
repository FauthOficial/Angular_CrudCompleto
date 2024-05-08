export interface User {
    name: string,
    email: string,
    sector: string,
    role: string,
    firebaseId?: string | number,
    healthPlan?: string | number,
    dentalPlan?: string | number,

}
