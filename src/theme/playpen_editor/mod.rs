//! Theme dependencies for the playpen editor.

pub static JS: &'static [u8] = include_bytes!("editor.js");
pub static ACE_JS: &'static [u8] = include_bytes!("ace.js");
pub static MODE_RUST_JS: &'static [u8] = include_bytes!("mode-rust.js");
pub static MODE_IDRIS_JS: &'static [u8] = include_bytes!("mode-idris.js");
pub static THEME_CHROME_JS: &'static [u8] = include_bytes!("theme-chrome.js");
pub static THEME_TOMORROW_NIGHT_JS: &'static [u8] = include_bytes!("theme-tomorrow_night.js");
