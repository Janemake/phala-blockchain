
use parity_scale_codec::{Encode, Decode};
use alloc::string::{String, ToString};

#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[derive(Debug, Encode, Decode, Default, Clone)]
pub struct InitArgs {
    /// The GK master key sealing path.
    pub sealing_path: String,

    /// The log filter string to pass to env_logger.
    pub log_filter: String,

    /// Whether start to benchmark at start.
    pub init_bench: bool,

    /// The App version.
    pub version: String,

    /// The git commit hash which this binary was built from.
    pub git_revision: String,

    /// Enable geolocation report
    pub enable_geoprobing: bool,

    /// Geoip database path
    pub geoip_city_db: String,

    /// Checkpoint file path, if empty, will disable checkpoint
    pub checkpoint_file: String,

    /// Checkpoint interval in seconds
    pub checkpoint_interval: u64,
}

pub fn git_revision() -> String {
    option_env!("PHALA_GIT_REVISION").unwrap_or("").to_string()
}
