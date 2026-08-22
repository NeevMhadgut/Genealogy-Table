#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use tauri::Manager;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let handle = app.handle();
      // Placeholder: initialize DB here later
      println!("Tauri app started. handle: {:?}", handle);
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
