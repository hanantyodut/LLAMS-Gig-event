import { Gender, Role, User } from "@prisma/client";
import dayjs from "dayjs";

export const users: User[] = [
	{
		id: "clxa3f630000008kz6hw1bp5s",
		username: "pehcun",
		fullname: "peh tjun",
		email: "peh@mail.cun",
		password: "$2a$12$CUYZfdxBjIb9T26Tdtj1QustH1DgDKzNKKu/vkLGY6MNQ57oY.Lj6",
		role: Role.customer,
		phone_no: "081771881778",
		id_card: "3172021809950010",
		gender: Gender.male,
		address: "Jl. Asia Afrika, Tugu Tani",
		date_of_birth: dayjs("1995-09-18").toDate(),
		avatar: null,
		referral_code: "pehcunB4cHUn9",
		reference_code: "testYAvL7o",
		points: 300000,
		points_expiry_date: dayjs("2024-09-11").toDate(),
		bank_acc_no: null,
		reset_token: null,
		is_verified: true,
		created_at: dayjs().toDate(),
		updated_at: dayjs().toDate(),
	},
	{
		id: "clxa3fn09000108kz6wcvb2aa",
		username: "cupentoh",
		fullname: "cupen toh",
		email: "cupento@mail.com",
		password: "$2a$12$tEaEJgtaybiiUEKai.aw3OUOJzmT1eaTiYlJvSLuFRImTB5ES22cG",
		role: Role.promotor,
		phone_no: "081771881779",
		id_card: "3172021809750010",
		gender: Gender.male,
		address: "Jl. Bangka, Parkiran McD Kemang",
		date_of_birth: dayjs("1995-12-31").toDate(),
		avatar: null,
		referral_code: "cupen83t0",
		reference_code: "testYAvL7o",
		points: 500000,
		points_expiry_date: dayjs("2024-09-11").toDate(),
		bank_acc_no: "7875709912345",
		reset_token: null,
		is_verified: true,
		created_at: dayjs().toDate(),
		updated_at: dayjs().toDate(),
	},
];
