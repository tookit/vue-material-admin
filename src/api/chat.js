import { getUser as User } from "./user"
// chat menu
const Menu = [
  {
    text: "Chat",
    icon: "chat",
    to: { path: "/chat/messaging" }
  },
  {
    text: "Contacts",
    icon: "contacts",
    to: { path: "/chat/contact" }
  },
  {
    text: "File",
    icon: "insert_drive_file",
    to: { path: "/chat/media" }
  },
  {
    text: "Settings",
    icon: "settings",
    to: { path: "/chat/settings" }
  }
]
// chat group
const Groups = [
  {
    uuid: "a44f8ade-513c-46b5-bae4-0acf809860e6",
    title: "nisi",
    users: ["da95e977-cd54-4077-a767-1b7f33ef6919"],
    created_by: "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
    created_at: "2018-04-10T15:02:15.476Z"
  },
  {
    uuid: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    title: "odio",
    users: ["46d6f992-5729-4588-b7f8-ce74f21157ba", "7d910620-84e1-49fc-951e-d375587b8189"],
    created_by: "eef93cb1-7766-4413-a5cf-ecbf71fa3674",
    created_at: "2018-04-11T04:02:56.728Z"
  },
  {
    uuid: "9c750cd1-a04d-4b9b-afe2-3e5f1b8d04fa",
    title: "delectus",
    users: ["60d07662-bfec-42c7-b044-c81bc4ff8c7a"],
    created_by: "bd30e201-cceb-410e-8497-a4072bc399f5",
    created_at: "2018-04-10T10:35:26.982Z"
  },
  {
    uuid: "0b29c8d1-6467-4680-9210-01d7669d47c1",
    title: "placeat",
    users: ["da95e977-cd54-4077-a767-1b7f33ef6919"],
    created_by: "6124d4e8-77ed-4b34-868d-d312bfab5de2",
    created_at: "2018-04-10T22:33:14.365Z"
  },
  {
    uuid: "ff04dee6-34f0-4ac9-b38b-463a2e0227e9",
    title: "minima",
    users: ["5c44b666-baca-4f18-a3cb-23068c6edc14", "14ddae1e-986d-42f4-8d17-46a02d469b2b"],
    created_by: "ee272550-36e8-4fe2-889d-c1ee701c5863",
    created_at: "2018-04-10T07:56:08.876Z"
  },
  {
    uuid: "42e3d8f8-a097-4049-bd6e-53eab86f3722",
    title: "ducimus",
    users: ["46d6f992-5729-4588-b7f8-ce74f21157ba", "6124d4e8-77ed-4b34-868d-d312bfab5de2"],
    created_by: "77f4b102-9df5-43ba-966a-6f816806c5e2",
    created_at: "2018-04-11T00:04:45.012Z"
  },
  {
    uuid: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    title: "et",
    users: ["65a6eb21-67b5-45c3-9af7-faca2d9b60d4", "3782c174-1f2c-4dc4-b75d-0bedf400e023"],
    created_by: "afdb5033-5bcc-4cec-b932-353a83410b44",
    created_at: "2018-04-10T20:30:02.955Z"
  },
  {
    uuid: "b42daaa7-ef3c-4cbe-89cc-52476f169232",
    title: "qui",
    users: ["afdb5033-5bcc-4cec-b932-353a83410b44"],
    created_by: "36a1ead7-57a0-4275-8a21-956194ab7cdf",
    created_at: "2018-04-11T05:27:15.635Z"
  },
  {
    uuid: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    title: "totam",
    users: [
      "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
      "5c44b666-baca-4f18-a3cb-23068c6edc14",
      "7d910620-84e1-49fc-951e-d375587b8189"
    ],
    created_by: "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
    created_at: "2018-04-10T14:47:13.370Z"
  },
  {
    uuid: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    title: "placeat",
    users: [
      "6a03248b-1752-4332-a3a9-7108528cc9d3",
      "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
      "65a6eb21-67b5-45c3-9af7-faca2d9b60d4"
    ],
    created_by: "a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",
    created_at: "2018-04-11T01:23:23.603Z"
  }
]

const Messages = [
  {
    uuid: "2cc7e60b-a81b-4859-bb88-e894e11eb77d",
    chatId: "a44f8ade-513c-46b5-bae4-0acf809860e6",
    text: "Ex laudantium veniam aut repellendus voluptatem vitae suscipit at quisquam.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-10T18:42:25.141Z"
  },
  {
    uuid: "2a2c7ea4-e2c1-47ac-8dc8-73ed074abb99",
    chatId: "a44f8ade-513c-46b5-bae4-0acf809860e6",
    text: "Natus ex qui at in et porro.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-10T09:39:34.913Z"
  },
  {
    uuid: "063c9eb5-249a-4778-9367-ebfd33f69a4e",
    chatId: "a44f8ade-513c-46b5-bae4-0acf809860e6",
    text: "Ut et qui unde nulla.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-11T04:47:33.345Z"
  },
  {
    uuid: "2ea77894-ae69-4a2b-9bf2-86b555f4d84b",
    chatId: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    text: "Impedit sed ducimus ut suscipit nobis id.",
    userId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    created_at: "2018-04-10T23:11:40.311Z"
  },
  {
    uuid: "09fc211d-e8a2-4bae-bb40-6a707c3c5eac",
    chatId: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    text: "Quia laborum labore maiores magnam sint.",
    userId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    created_at: "2018-04-10T16:47:00.297Z"
  },
  {
    uuid: "9150380c-7675-4780-8395-e1d6fa1749f7",
    chatId: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    text: "Aut consectetur est eligendi impedit.",
    userId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    created_at: "2018-04-11T00:22:22.961Z"
  },
  {
    uuid: "757c2b29-5121-4c51-a9a0-390a537307bc",
    chatId: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    text: "Recusandae voluptatibus nisi perferendis et ut quo repellat.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-10T14:30:41.149Z"
  },
  {
    uuid: "c06da098-5532-4b4b-95fe-f9cc9b64a44a",
    chatId: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    text: "Beatae laborum enim.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-10T20:57:39.530Z"
  },
  {
    uuid: "9e6b676c-9042-497c-a96e-c78b2d30570f",
    chatId: "c86f170d-9a36-4f2c-bb76-2de65aa8c7bf",
    text: "Ullam aliquid sint dicta nisi veritatis dolor.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-10T11:14:29.366Z"
  },
  {
    uuid: "68863c56-f8bd-486b-a904-cf7abe788849",
    chatId: "9c750cd1-a04d-4b9b-afe2-3e5f1b8d04fa",
    text: "Est minima quo doloribus adipisci qui.",
    userId: "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
    created_at: "2018-04-10T19:05:08.963Z"
  },
  {
    uuid: "96d13a69-7bd1-4523-bd47-d9986d7819d0",
    chatId: "9c750cd1-a04d-4b9b-afe2-3e5f1b8d04fa",
    text: "Molestiae id amet tempore labore ipsam debitis.",
    userId: "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
    created_at: "2018-04-10T15:49:06.410Z"
  },
  {
    uuid: "2657bfda-59df-43ec-baa5-bfad08c5c412",
    chatId: "0b29c8d1-6467-4680-9210-01d7669d47c1",
    text: "Voluptatem excepturi minima quidem id non.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-11T02:29:58.528Z"
  },
  {
    uuid: "d9bcf3b5-6ef7-4aef-ab62-1e94947fecd0",
    chatId: "0b29c8d1-6467-4680-9210-01d7669d47c1",
    text: "Qui non laudantium et.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-10T12:41:25.616Z"
  },
  {
    uuid: "ed87358b-c859-4f0e-be23-2f038a53b65c",
    chatId: "0b29c8d1-6467-4680-9210-01d7669d47c1",
    text: "Magni est nihil repellat.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-11T04:51:19.790Z"
  },
  {
    uuid: "b56554d9-b98a-4c9c-99cc-d7964da81dce",
    chatId: "0b29c8d1-6467-4680-9210-01d7669d47c1",
    text: "Magnam blanditiis eum unde et sapiente dolore aliquid unde dolor.",
    userId: "da95e977-cd54-4077-a767-1b7f33ef6919",
    created_at: "2018-04-10T21:15:03.304Z"
  },
  {
    uuid: "380a2600-2aa7-4764-b3de-8e0563ba33cf",
    chatId: "ff04dee6-34f0-4ac9-b38b-463a2e0227e9",
    text: "Suscipit rerum voluptate sint saepe quis.",
    userId: "5c44b666-baca-4f18-a3cb-23068c6edc14",
    created_at: "2018-04-11T04:37:10.098Z"
  },
  {
    uuid: "f207c65c-8a55-436f-8eb6-7c0f8880ac0d",
    chatId: "ff04dee6-34f0-4ac9-b38b-463a2e0227e9",
    text: "Earum quis facere aut nostrum voluptatem.",
    userId: "14ddae1e-986d-42f4-8d17-46a02d469b2b",
    created_at: "2018-04-10T16:16:49.913Z"
  },
  {
    uuid: "1f2c46a2-072f-40ce-9fa7-a54dee81d8b8",
    chatId: "ff04dee6-34f0-4ac9-b38b-463a2e0227e9",
    text: "Non maiores eligendi facere sunt totam optio.",
    userId: "14ddae1e-986d-42f4-8d17-46a02d469b2b",
    created_at: "2018-04-11T00:48:29.388Z"
  },
  {
    uuid: "65d307b0-69c9-4fda-9012-0819f9010d44",
    chatId: "ff04dee6-34f0-4ac9-b38b-463a2e0227e9",
    text: "Excepturi placeat necessitatibus ea et alias repudiandae.",
    userId: "14ddae1e-986d-42f4-8d17-46a02d469b2b",
    created_at: "2018-04-10T20:55:54.204Z"
  },
  {
    uuid: "833654bc-5c4a-46f7-9a77-7e6a4f6707fe",
    chatId: "42e3d8f8-a097-4049-bd6e-53eab86f3722",
    text: "Labore corporis et.",
    userId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    created_at: "2018-04-11T04:22:25.581Z"
  },
  {
    uuid: "8f85169b-37c2-4d2f-bf5a-e193b5768823",
    chatId: "42e3d8f8-a097-4049-bd6e-53eab86f3722",
    text: "Repudiandae similique neque blanditiis voluptatem.",
    userId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    created_at: "2018-04-11T04:31:40.571Z"
  },
  {
    uuid: "b29dbfa3-b34e-48ac-b65a-f9f22c311df0",
    chatId: "42e3d8f8-a097-4049-bd6e-53eab86f3722",
    text: "Ut doloribus ad.",
    userId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    created_at: "2018-04-10T17:52:24.773Z"
  },
  {
    uuid: "6bad98e9-2615-4fca-80e3-8388078ee4df",
    chatId: "42e3d8f8-a097-4049-bd6e-53eab86f3722",
    text: "Quia molestiae perspiciatis nihil voluptas facilis enim fugit occaecati laboriosam.",
    userId: "6124d4e8-77ed-4b34-868d-d312bfab5de2",
    created_at: "2018-04-10T16:19:53.205Z"
  },
  {
    uuid: "b2e5993f-a367-4183-97f9-6a778e99970a",
    chatId: "42e3d8f8-a097-4049-bd6e-53eab86f3722",
    text: "Explicabo sapiente voluptatibus provident.",
    userId: "6124d4e8-77ed-4b34-868d-d312bfab5de2",
    created_at: "2018-04-10T10:07:06.317Z"
  },
  {
    uuid: "60f3ae3b-fc7e-41bf-9b50-330d42b4eabe",
    chatId: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    text: "Qui eius velit esse est hic voluptas possimus consequatur.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T07:12:32.351Z"
  },
  {
    uuid: "88583551-1f48-434e-80a7-8c3e282ab527",
    chatId: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    text: "Expedita distinctio ea.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-11T06:22:54.274Z"
  },
  {
    uuid: "b504481e-6c57-4eaf-a3de-a46e007af2fc",
    chatId: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    text: "Numquam sit minima.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T11:36:29.344Z"
  },
  {
    uuid: "69c572f4-0f07-4434-abfd-61e22af047bb",
    chatId: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    text: "Eos facilis sunt non autem hic.",
    userId: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
    created_at: "2018-04-11T04:23:08.344Z"
  },
  {
    uuid: "d7f57929-a16b-4037-9b23-480224efbb52",
    chatId: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    text: "Sed voluptatibus ut tempora ut voluptas alias quas.",
    userId: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
    created_at: "2018-04-11T05:01:28.334Z"
  },
  {
    uuid: "be2034ef-d0e9-4110-9df9-e46fef8b2de7",
    chatId: "14c43a19-3938-41ec-90ca-9f09d9390a6f",
    text: "Omnis a ea aut est reiciendis consequatur earum molestias quod.",
    userId: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
    created_at: "2018-04-11T06:25:41.867Z"
  },
  {
    uuid: "fc273883-0360-42ab-ae03-53923c906a8c",
    chatId: "b42daaa7-ef3c-4cbe-89cc-52476f169232",
    text: "Voluptas eligendi sit et.",
    userId: "afdb5033-5bcc-4cec-b932-353a83410b44",
    created_at: "2018-04-10T08:50:09.825Z"
  },
  {
    uuid: "4548dbd5-cd36-447e-9476-a831b5000ab3",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "At est rem.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T10:52:17.635Z"
  },
  {
    uuid: "2ee80955-bdc4-4195-a22e-a32cc2f87b9d",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Dolores alias amet dolor blanditiis consequatur qui consequatur harum.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T12:05:44.794Z"
  },
  {
    uuid: "709514c4-e86f-4a39-acb1-0162df208042",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Ut odit voluptas et voluptates esse consequatur eius aut.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T23:37:57.117Z"
  },
  {
    uuid: "9272611c-6842-4a3d-957a-e129b75a9ff8",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Molestiae praesentium maiores amet cum quasi.",
    userId: "5c44b666-baca-4f18-a3cb-23068c6edc14",
    created_at: "2018-04-10T08:17:01.849Z"
  },
  {
    uuid: "156dc16b-58a6-4b63-9703-85f120ef58e9",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Asperiores voluptatibus illo autem ipsa sit excepturi tempora sint.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-10T17:05:53.637Z"
  },
  {
    uuid: "0a402ffd-3d7c-491e-957b-a521b823fe30",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Dignissimos praesentium quo tenetur facere sed voluptatibus doloribus.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-10T19:04:30.895Z"
  },
  {
    uuid: "ffbdadc3-8029-45d4-85d1-5caa50064836",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Dolorem repudiandae ut ipsum maiores omnis deleniti libero similique.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-11T00:24:35.538Z"
  },
  {
    uuid: "ade76548-7eed-448d-85b9-b3f73a7caf3f",
    chatId: "a4fb2a31-7e6f-4103-b512-3a0e1856b42d",
    text: "Quia et nulla officiis sed incidunt.",
    userId: "7d910620-84e1-49fc-951e-d375587b8189",
    created_at: "2018-04-10T20:07:30.303Z"
  },
  {
    uuid: "f887af23-b252-4ac7-9f69-cb9161ac9f3b",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Delectus sed aperiam.",
    userId: "6a03248b-1752-4332-a3a9-7108528cc9d3",
    created_at: "2018-04-10T23:33:05.619Z"
  },
  {
    uuid: "c87bae69-5c3e-4546-9694-ff339bdf35de",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Ad nam perspiciatis.",
    userId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
    created_at: "2018-04-10T07:12:52.646Z"
  },
  {
    uuid: "6ecfe4f2-bc8b-4ced-b569-d48ced93eb1f",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Numquam expedita vero.",
    userId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
    created_at: "2018-04-10T18:40:01.513Z"
  },
  {
    uuid: "e5a22400-92d8-4f7b-86c2-d82ce81e252f",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Nemo aliquid molestiae veniam maxime molestiae velit pariatur.",
    userId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
    created_at: "2018-04-11T03:56:04.139Z"
  },
  {
    uuid: "ffb0733c-648a-4d5b-8730-7e6b80f15140",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Quis aut rerum illum.",
    userId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
    created_at: "2018-04-10T09:04:51.772Z"
  },
  {
    uuid: "3523d9b3-43b1-4190-8dba-45df3e5e7458",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Eos laborum quo quis repellat qui aut et quibusdam consequatur.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-11T05:01:13.162Z"
  },
  {
    uuid: "52baaf8e-3bca-41c8-bbad-945bae0d681a",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Inventore labore similique eaque ipsam sunt est deleniti.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T14:40:01.818Z"
  },
  {
    uuid: "d63b9475-669a-49fb-b8eb-63a50bbc8fd0",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Sunt et vero nemo voluptate sint eos quae tempore.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T07:44:03.117Z"
  },
  {
    uuid: "8bec71cc-eb61-4d8d-ace7-b3a343f5efc8",
    chatId: "b1f03c8b-837f-4579-a18b-974d3ce93f3b",
    text: "Voluptatem vel hic mollitia laborum.",
    userId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    created_at: "2018-04-10T14:46:17.356Z"
  }
]

// Add user to map
Messages.map(item => {
  let tmp = User().find(x => x.uuid === item.userId)
  item.user = {
    uuid: tmp.uuid,
    name: tmp.name,
    avatar: tmp.avatar
  }
  return item
})

// add messages to group
Groups.map(item => {
  item.messages = Messages.filter(x => x.chatId === item.uuid)
  item.user = User().find(x => x.uuid === item.created_by)
  return item
})

// get chat group
const getChatById = uuid => {
  return uuid !== undefined ? Groups.find(x => x.uuid === uuid) : Groups[0]
}

export { Menu, Groups, getChatById }
