// let gotLumiere = false;
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡍⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠉⢹⡏⠉⠙⠿⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣄⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢀⡀⠈⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣶⣶⣾⣿⣿⣿⣿⣷⣶⡀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⣀⣤⣿⠀⠀⢼⣾⣷⡆⠀⢹⡿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠛⠛⠻⣿⣿⣿⣿⣿⣶⡄⠀⠘⢹⣿⣿⣿⣿⣿⣿⣿⣿⠀⢰⣿⣿⣿⡀⢀⣾⣿⣿⡇⠀⢸⣷⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⠀⠙⢿⣿⣿⣿⣿⣇⡀⠹⢿⣿⣿⣿⣿⣿⣿⣿⠀⢻⣿⣿⣿⣷⣿⠛⢻⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⠀⠀⠀⠀⠀⢰⣦⣤⣤⣤⣾⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⠾⠟⠛⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠟⠉⠉⠉⠙⠛⠿⠷⠾⢿⣿⣿⣿⣿⣿⣦⡀⠻⣿⣿⣿⣿⣿⣿⣷⣚⣿⣿⣿⣿⣿⣇⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⢹⣿⣿⣿⣿⣦⣼⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⢠⣤⣤⡀⠀⣠⣴⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣧⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⢀⣠⣿⣿⣿⡿⡿⠿⠿⠿⠿⠓⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣄⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⠃⠀⠀⠀⠀⠀⠈⢿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⡏⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⢀⣾⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⡆⠚⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣾⣿⣿⠁⢠⣶⣿⣿⣿⣿⣿⣷⣄⠙⢻⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⢀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣞⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣹⣿⣿⣿⡅⠀⠀⠀⠀⠀⣿⣿⡏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡿⠿⣿⡷⠚⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡇⠀⠈⠁⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⡿⠉⠁⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⡂⠀⠀⠀⠀⣿⣿⣿⣏⠉⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣷⡀⣀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣆⣀⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡏⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⢿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⠇⢠⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⢿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡟⠀⢸⣿⣿⣿⣼⣿⣿⣿⣿⣿⠈⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣿⣿⡿⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣤⣤⣤⣤⣤⣶⣿⣿⣿⣿⣿⣧⣀⣸⣿⣿⠿⠟⠋⠉⠉⠉⠛⠙⠉⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣿⣭⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣌⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣬⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣯⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣯⣻⠿⣿⣿⣿⣿⣿⢿⣿⣟⣻⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠁⣠⣾⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣭⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣱⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
let gotLumiere = 0;
(notLumi = function () {
  gotLumiere++;
  goToChapter(`dead_grotto`);
}),
  (gotLumi = function () {
    if (gotLumi > 0) {
      goToChapter(`dead_grotto`);
    } else {
      goToChapter(`retour_foret`);
    }
  });

//uh je suis pas sur si j'ai bien compris 
//le principe mais comme ca ca marche?
//si j'ai la lumiere je passe dans la foret 
//sinon je me fais bouffer par la grotte
//I guess ce qui me melange aussi c'est que j'au aussi 
//une route au debut qui te mene a cette mort. Essentiellement,
// si tu as la lumiere, tu peux entrer dans la foret 
//si tu ne l'as pas, tu meurs.
//je sens aussi que je me suis perdu sans me perdre 
//dans mes noms gotLumi et notLumi en donnant le resultat que 
//j'ai de besoin pareil

restart = function () { 
    // return to (cette partie va etre 
    // le main menu, pour differencier de
    // goToChapter)   *(goToChapter = still in the game)
  gotLumiere--;
  goToChapter(`gulag_island`);
};

// changer le text des options pour plus court
const chaptersObj = {
    gulag_island: {
        subtitle: "GULAG ISLAND",
        text:"L'aventure commence, vous arrivez enfin sur l'ile de Fortuna. Trois choix s'offre a vous:",
        // un gif marche masi pas video
        img: "assets/images/aaaa.gif", //premier gif
        options: [
            /**Grotte = **/ 
            {
                text: "Entrer dans la grotte",
                action: "notLumi()",
            },
            /**Foret = **/  
            {
                text: "Attendre un passant",
                action: "goToChapter('waiting')",
            },
            /**Attendre = **/ 
            {
                text: "Entrer dans la forêt",
                action: "goToChapter('entree_foret')",
            },
        ],
    },

    dead_grotto: {
        subtitle: "chomp", 
        text:"mioum",
        img: "assets/images/hey.gif", //gif qui attend
    
        options: [
            /*fini attendre =*/ 
            {
                text: "why u do diss",
                action: "restart()",
            },
        ],
    },

    entree_foret: {
        subtitle: "DÉCISION", 
        text:"Un vent extrêmement froid vous passe par le dos. Vous vous demandez si c'est vraiment un bon choix...",
        img: "assets/images/run.gif",
    
        options: [
            // entre: 
            {
                text: "Vous avez assez vu de film d'horreur pour savoir de ne pas entrer dans les forêts.",
                action: "goToChapter('gulag_island')",
            },
            // retourne: 
            {
                text: "Prenez votre courage a douze mains et entrer dans la forêt...",
                action: "notLumi()",
            },
        ],
    },

    waiting: {
        subtitle: "WAITING?", 
        text:"Vous attendez mais la ça commence a devenir long et personne semble venir.",
        img: "assets/images/hey.gif", //gif qui attend
    
        options: [
            /*fini attendre =*/ 
            {
                text: "ÇA SUFFIT LÀ LÀ! CRÉATEUR VIENS, ON VA SE BATTRE!",
                action: "goToChapter('tatakae')",
            },
        ],
    },

    tatakae: {
        subtitle: "TATAKAE!", 
        text:"Vous en avez marre d'attendre et decidez d'aller attaquer directement le créateur.",
        img: "assets/images/hey.gif", // gif qui cours
    
        options: [
            /*running =*/ 
            {
                text: "Héro VS Le Créateur!",
                action: "goToChapter('vs_createur')",
            },
        ]
    },

    vs_createur: {
        subtitle: "1er Boss, Le Créateur!", 
        text:"Le Créateur est maintenant devant vous! Stay determined! Trois attaques vous passe par la tête:",
        img: "assets/images/hey.gif", // gif du créateur stance jojo
    
        options: [
            /*dance =*/ 
            {
                text: "Utiliser des moves de ouf pour le vaincre",
                action: "goToChapter('dance_battle')",
            },
    
    
            /*coup de boule = */
            {
                text: "Sauter comme Zidane avec un coup de boule",
                action: "goToChapter('dead_crane')",
            },

            /*summon = */
            {
                text: "Invoquer Dieu",
                action: "goToChapter('dead_dieu')",
            },
        ],
    },

    dance_battle: {
        subtitle: "SO YOU THING YOU CAN DANCE?!", 
        text:"C'est le temps de bust-a-move!",
        img: "assets/images/cat.gif", //gif meme dance
        options: [
            /*Thriller = */
            {
                text: "L'esprit de MJ vous envahis sortant les moves de Thriller!",
                action: "goToChapter('dead_zombie')",
            },
    
            /*SmoothCriminal = */
            {
                text: "L'esprit de MJ vous envahis sortant les moves d'un smooth criminal",
                action: "goToChapter('smooth')",
            },
        ],
    },

    smooth: {
        subtitle: "Smooth Criminal!", 
        text:"HEE~ HEE~!",
        img: "assets/images/cat.gif", //gif smooth criminal
        options: [
            /*dance criminal = */
            {
                text: "HEE~ HEE~ OW!",
                action: "goToChapter('win_lumiere')",
            },
        ],
    },

    win_lumiere: {
        subtitle: "WINNER!", 
        text:"Le créateur est vaincu! Vous gagnez 133742069 EXP! Le Créateur vous donne la Lumière en guise de récompense!",
        img: "assets/images/ash.gif", //img createur ded gg easy money
        options: [
            /*DirectionForet = */
            {
                text: "armer de la Lumière, vous êtes maintenant prêt à affronter le dernier boss! Direction la foret!",
                action: "gotLumi()",
            },
        ],
    },

    retour_foret: {
        subtitle: "RETOUR VERS LA FORÊT!", 
        text:"Vous vous trouvez devant la forêt...",
        img: "assets/images/spe.gif", // marche vers la foret undefined
        options: [
            /*pewpewpew = */
            {
                text: "Entrer dans la forêt",
                action: "goToChapter('enter')",
            },

            {
                text: "Vous n'avez pas de lumière",
                action: "notLumi()",
            },
        ],
    },

    enter: {
        subtitle: "Dernier boss, Ombronomonstre!", 
        text:"Vous entrez dans la forêt, l'ombre qui vous faisait peur est finalement éblouïs grâce à la Lumière! Le dernier boss Ombronomonstre est maintenant devant vous! Ombronomonstre vous lance une attaque!",
        img: "assets/images/spe.gif", // marche vers la foret undefined
        options: [
            /*pewpewpew = */
            {
                text: "Doight pistol! Pewpewpew!",
                action: "goToChapter('dead_pewpewpew')",
            },
    
            /*TheKnee = */
            {
                text: "FALCON KNEE!",
                action: "goToChapter('falcon_knee')",
            },
        ],
    },

    falcon_knee: {
        subtitle: "HYESZ", 
        text:"La force sublime de Captain Falcon surgis de vous!",
        img: "assets/images/spe.gif", // FALCON KNEE ANIMATED
        options: [
            {
                text: "GAME?",
                action: "goToChapter('phase_deux')",
            },
        ],
    },

    phase_deux: {
        subtitle: "PHASE DEUX!", 
        text:"Vous avez blessé l'oeil droite d'Ombronomonstre! Il vous attaque de votre droite! Vous sentez la fin de l'histoire et tout à coup, vous entendez une voix dans votre tête: « I am thou, thou art I. Call upon my name, and release thy rage!» Une flemme en vous se réveil! Vous avez reçu le Persona:",
        img: "assets/images/jok.gif",
        options: [
            /*Izanagi = */
            {
            text: "IZANAGI, MEGIDOLAON!",
            action: "goToChapter('izanagi')",
            },

            /*Orpheus = */
            {
            text: "ORPHEUS, AGIDYNE!",
            action: "goToChapter('orpheus')",
            },

            /*Arsene = */
            {
            text: "ARSENE, MAEIGAON!",
            action: "goToChapter('arsene')",
            },
        ],
    },

    izanagi: {
        subtitle: "PERSONA!", 
        text:"Yuu Narukami est fière de vous en ce moment",
        img: "assets/images/jok.gif", //gif attaque izanagi
        options: [
            /*Izanagi = */
            {
            text: "...",
            action: "goToChapter('final_attack')",
            },
        ],
    },

    orpheus: {
        subtitle: "PERSONA!", 
        text:"Makoto Yuki est fière de vous en ce moment",
        img: "assets/images/jok.gif", //gif attaque orpheus
        options: [
            /*Orpheus = */
            {
            text: "...",
            action: "goToChapter('final_attack')",
            },
        ],
    },

    arsene: {
        subtitle: "PERSONA!", 
        text:"Ren Amamiya est fière de vous en ce moment",
        img: "assets/images/jok.gif", //gif attaque arsene
        options: [
            /*Arsene = */
            {
            text: "...",
            action: "goToChapter('final_attack')",
            },
        ],
    },

    final_attack: {
        subtitle: "LAST SURPRISE", 
        text:"Ombronomonstre est sérieusement blessé! Dans sa dernière tentative de vous éliminer, il charge un méga laser! C'est le tout pour le tout!",
        img: "assets/images/gop.gif",
        options: [
            /*Friendship = */
            {
                text: "Utilise Le pouvoir de l'amitié. cent pourcent ça marche car le pouvoir de l'amitié est imbattable",
                action: "goToChapter('dead_friendship')",
            },
    
            /*FusionWeebCeleste = */
            {
                text: "Naruto, Ichigo, Luffy et Son Goku apparaît et vous fusionnez pour créer l'ultime Weeb",
                action: "goToChapter('getsuga_gomu_rasen_ha')",
            },
        ],
    },

    dead_friendship: {
        subtitle: "bruh", 
        text:"bruh",
        img: "assets/images/jok.gif", //gif attaque arsene
        options: [
            
            {
            text: "bruh",
            action: "restart()",
            },
        ],
    },

    getsuga_gomu_rasen_ha: {
        subtitle: "WEEB POWER", 
        text:"En canalisant la force de Weeb, vous lancez l'attaque la plus puissante de l'univers et de ce fait",
        img: "assets/images/weeb.gif",
        options: [
            /*butin = */
            {
                text: "Vous avez fini. La récompense est maintenant à vous! Félicitation!",
                action: "goToChapter('good_ending')",
            },
        ],
    },
    
    good_ending: {
            subtitle: "FÉLICITATION!", 
            text:"Merci d'avoir fini mon jeu et de pas avoir utilisé le pouvoir de l'amitier! Si vous l'avez choisi et c'est votre deuxième fois à jouer, parlez moi plus jamais. Merci.",
            img: "assets/images/yes.gif",
            options: [
                /*butin = */
                {
                    text: "Recommencer?",
                    action: "goToChapter('gulag_island')",
                },
            ],
        },
    
};

// let gotLumiere = false;

// function bruh() {
//     gotLumiere = true 
//         console.log(goToChapter)
// };

function goToChapter(chapterName) {

    const chapitre = chaptersObj[chapterName];
    console.log(chapitre);
    document.querySelector('.mySubtitle').textContent = chapitre.subtitle;
    document.querySelector('.myText').textContent = chapitre.text;
    // ??? document.querySelector('.a').textContent = chapitre.action;???
    document.querySelector('.myImg').src = chapitre.img;
    // document.querySelector('myVideo').src =???
    let choix = document.querySelector('.bouton');
    let optionsArr = chapitre.options;
    console.log(optionsArr[length].action);
    console.log(optionsArr.length);

    let element = "";

    for (let index = 0; index < optionsArr.length; index++) {
        console.log(optionsArr[index].text);
        element += `<button onclick="${optionsArr[index].action}">${optionsArr[index].text}</button>`;
    };
    choix.innerHTML = element;
};







// const sub = document.querySelector(".mySubtitle");
    // sub.innerHTML = "fuck";
    
// -----------------------------document.querySelector("#myS").textContent = "poop";
// console.log(mySubtitle.innerHTML);
    // #3 - Toujours dans la même fonction, récupérez l’image de votre chapitre, 
    // composez une chaîne de caractères correspondant à une balise image 
    // contenant son URL et insérez là à la place de l’image actuelle.
    //---- so prends la taille de l'image de HxH et fait tes dessins a partir de cette taille------------//

/* 
h1 = titre = id > myTitle
p = text = id > myText
p2 = subtitle = id > mySubtitle
img = img
?bouton/button = action ?
*/
// //     let optionsArr = chapitre.options;
// //     let button = document.querySelectorAll('.a','.b','.c');
// //     console.log(optionsArr[length].action);

// //     for (let index = 0; index <= optionsArr.length; index++) {
// //     button[length].innerHTML = `${optionsArr[length].text}`;
// //     const choix = optionsArr[index];
// //     console.log(choix);
// // }

//---------------maybe idk---------------------------//
// let optionsArr = chapitre.options;
// let button = document.querySelectorAll('.a');
// let button2 = document.querySelectorAll('.b');
// let button3 = document.querySelectorAll('.c');
// console.log(optionsArr[0].action);

// for (let index = 0; index <= optionsArr.length-1; index++) {
// button[index].innerHTML = `${optionsArr[0].text}`;
// button2[index].innerHTML = `${optionsArr[1].text}`;
// button3[index].innerHTML = `${optionsArr[2].text}`;
// // Y I K E S
// const choix = optionsArr[index];
// console.log(choix);
// }
//---------------------------------------------------------------//

    // console.log(chapitre.subtitle);
    // console.log(chapitre.text);
    // console.log(chapitre.img);
    // console.log(chapitre.action);

    //------boucle-----------//
//     let optionsArr = chapitre.options;
//     let button = document.querySelectorAll('.bouton');
//     console.log(optionsArr[length].action);
    

//     for (let index = 0; index <= optionsArr.length-1; index++) {
//     button[length].innerHTML = `<button>${optionsArr[length].text}</button>`;
   
//     console.log();
// }

//   };


//--------STORY PROGRESSION----------//
// --------------------------Add the new options----------------------//

//   gulag_island  ---------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   entree_foret
//   waiting       ---------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   tatakae (aller tuer le dessinateur)------DREW-|-NOT ANIMATED-|-NOT COLORED
//   1st_boss_screen (fight) -----------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   dance_battle ----------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   smooth_criminal -------------------------DREW-|-NOT ANIMATED-|-NOT COLORED
//   win_lumiere -----------------------------DREW (NO NEED TO ANIMATE IDK)-|-NOT COLORED
//   retour_foret ----------------------------IDK IF THIS IS STANDARD
//   phase_deux ------------------------------
//   persona ---------------------------------(persona attack)
//   final_attack ----------------------------
//   getsuga_gomu_rasen_ha -------------------(attack)
//   ombro_dead ------------------------------(win)
//   good_ending -----------------------------(end)

//-------BAD ENDS-----------//
// dead_grotte
// dead_foret
// dead_crane
// dead_dieu
// dead_zombie
// dead_pewpewpew
// dead_friendship